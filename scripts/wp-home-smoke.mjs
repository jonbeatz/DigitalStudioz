/**
 * DigitalStudioz LocalWP Home smoke — Divi 5 layout guards
 *
 * Checks (desktop 1440 + phone 390):
 *  - Header: Contact link near Start a Project (desktop)
 *  - Services/Process columns stack full-width on phone
 *  - Back-to-top clears footer credit vertically when scrolled to bottom
 *
 * Usage (from DigitalStudioz root):
 *   npm run wp:smoke
 *
 * Requires: Local site up at https://digitalstudioz.local/
 * Installs playwright chromium on first run via npx if needed.
 */
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
import process from 'node:process';

const BASE = process.env.DSZ_WP_URL || 'https://digitalstudioz.local/';
const IGNORE_TLS = process.env.DSZ_WP_SMOKE_INSECURE !== '0';

async function loadPlaywright() {
  try {
    const require = createRequire(import.meta.url);
    return require('playwright');
  } catch {
    console.log('[wp:smoke] playwright not installed locally — using npx playwright...');
    const r = spawnSync(
      'npx',
      ['--yes', 'playwright@1.49.1', 'install', 'chromium'],
      { stdio: 'inherit', shell: true }
    );
    if (r.status !== 0) {
      throw new Error('Failed to install playwright chromium via npx');
    }
    // Dynamic import from npx cache is fragile — install as project dep suggestion
    const require2 = createRequire(import.meta.url);
    try {
      return require2('playwright');
    } catch {
      throw new Error(
        'Install playwright as a devDependency: npm i -D playwright\nThen re-run npm run wp:smoke'
      );
    }
  }
}

function fail(msg) {
  console.error(`[wp:smoke] FAIL: ${msg}`);
  process.exitCode = 1;
}

function ok(msg) {
  console.log(`[wp:smoke] OK: ${msg}`);
}

async function measure(page) {
  return page.evaluate(() => {
    const gap = (a, b) => {
      if (!a || !b) return null;
      return Math.round(b.getBoundingClientRect().left - a.getBoundingClientRect().right);
    };
    const isShown = (el) => {
      if (!el) return false;
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) return false;
      const cs = getComputedStyle(el);
      return cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) > 0.05;
    };
    const header = document.querySelector('header.et-l--header');
    const lastLink = header?.querySelector('ul.et-menu > li:last-child');
    const cta = header?.querySelector('a.ds-header-cta, .et_pb_column_2_tb_header a.et_pb_button');
    const hamburger = header?.querySelector('.mobile_menu_bar');
    const deskMenu = header?.querySelector('ul.et-menu');
    const svcRow = document.querySelector('#services .et_pb_row:nth-of-type(2), #services .et_pb_row:not(:first-child)');
    const svcCols = svcRow
      ? [...svcRow.querySelectorAll(':scope > .et_pb_column')].map((c) =>
          Math.round(c.getBoundingClientRect().width)
        )
      : [];
    const procRow = [...document.querySelectorAll('#process .et_pb_row')].filter(
      (r) => !r.classList.contains('et_pb_row_nested')
    )[1];
    const procCols = procRow
      ? [...procRow.querySelectorAll(':scope > .et_pb_column')].map((c) =>
          Math.round(c.getBoundingClientRect().width)
        )
      : [];
    const back = document.querySelector('.ds-back-top');
    return {
      vw: window.innerWidth,
      lastLinkToCta: gap(lastLink, cta),
      hamburgerVisible: isShown(hamburger),
      deskMenuVisible: isShown(deskMenu),
      svcCols,
      procCols,
      svcDir: svcRow ? getComputedStyle(svcRow).flexDirection : null,
      procDir: procRow ? getComputedStyle(procRow).flexDirection : null,
      backBottom: back ? getComputedStyle(back).bottom : null,
    };
  });
}

async function measureBackTopClearance(page) {
  // Prefer Playwright scroll — Lenis/smooth scroll can ignore sync scrollIntoView in headless
  const credit = page.locator('.et-l--footer').getByText('Built with DigitalStudioz', { exact: true }).first();
  await credit.scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  return page.evaluate(() => {
    const back = document.querySelector('.ds-back-top');
    const creditEl = [...document.querySelectorAll('.et-l--footer *')].find(
      (el) => (el.textContent || '').trim() === 'Built with DigitalStudioz'
    );
    if (!back || !creditEl) return { overlapsCredit: true, backClear: null, backBottom: null };
    back.classList.add('is-visible');
    const br = back.getBoundingClientRect();
    const cr = creditEl.getBoundingClientRect();
    const overlapsCredit = !(
      br.bottom < cr.top ||
      br.top > cr.bottom ||
      br.right < cr.left ||
      br.left > cr.right
    );
    return {
      overlapsCredit,
      backClear: Math.round(cr.top - br.bottom),
      backBottom: getComputedStyle(back).bottom,
      creditInView: cr.top < window.innerHeight && cr.bottom > 0,
    };
  });
}

async function main() {
  const pw = await loadPlaywright();
  const { chromium } = pw;
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    ignoreHTTPSErrors: IGNORE_TLS,
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  console.log(`[wp:smoke] GET ${BASE}`);
  const res = await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 60000 });
  if (!res || res.status() >= 400) {
    fail(`Home HTTP ${res?.status()}`);
    await browser.close();
    return;
  }
  await page.waitForTimeout(800);

  // Desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(400);
  const desk = await measure(page);
  if (!desk.deskMenuVisible || desk.hamburgerVisible) {
    fail(
      `Desktop nav chrome wrong (menu=${desk.deskMenuVisible}, hamburger=${desk.hamburgerVisible}, vw=${desk.vw})`
    );
  } else {
    ok('Desktop header shows menu links (hamburger hidden)');
  }
  if (desk.lastLinkToCta == null || desk.lastLinkToCta > 80) {
    fail(`Desktop Contact→CTA gap ${desk.lastLinkToCta} (want ≤80)`);
  } else {
    ok(`Desktop Contact→CTA gap ${desk.lastLinkToCta}px`);
  }

  // Phone layout
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(500);
  const phone = await measure(page);
  const minSvc = phone.svcCols.length ? Math.min(...phone.svcCols) : 0;
  const minProc = phone.procCols.length ? Math.min(...phone.procCols) : 0;
  if (phone.svcDir !== 'column' || minSvc < 280) {
    fail(`Services not stacked on phone (dir=${phone.svcDir}, widths=${phone.svcCols})`);
  } else {
    ok(`Services stacked on phone (widths ${phone.svcCols.join(',')})`);
  }
  if (phone.procDir !== 'column' || minProc < 280) {
    fail(`Process not stacked on phone (dir=${phone.procDir}, widths=${phone.procCols})`);
  } else {
    ok(`Process stacked on phone (widths ${phone.procCols.join(',')})`);
  }

  const foot = await measureBackTopClearance(page);
  if (
    foot.overlapsCredit ||
    !foot.creditInView ||
    foot.backClear == null ||
    foot.backClear < 16 ||
    foot.backClear > 160
  ) {
    fail(
      `Back-to-top vs credit bad (overlaps=${foot.overlapsCredit}, inView=${foot.creditInView}, clear=${foot.backClear}, bottom=${foot.backBottom})`
    );
  } else {
    ok(`Back-to-top clear of credit (bottom=${foot.backBottom}, clear=${foot.backClear}px)`);
  }

  await browser.close();
  if (process.exitCode) {
    console.error('[wp:smoke] FAILED');
    process.exit(1);
  }
  console.log('[wp:smoke] ALL PASS');
}

main().catch((err) => {
  console.error('[wp:smoke]', err);
  process.exit(1);
});
