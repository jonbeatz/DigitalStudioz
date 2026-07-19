/**
 * DigitalStudioz child theme — core front-end scripts.
 * Handle: dgtl-digitalstudioz-core (functions.php)
 */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var backTop = document.querySelector('.ds-back-top');
    var tbHeader = document.querySelector('.et-l--header');

    function onScroll() {
      var scrolled = window.scrollY > 24;
      if (tbHeader) {
        tbHeader.classList.toggle('is-scrolled', scrolled);
      }
      // Legacy HTML chrome (revert path) still toggles if present.
      var legacy = document.querySelector('.ds-site-header');
      if (legacy) {
        legacy.classList.toggle('is-scrolled', scrolled);
      }
      if (backTop) {
        if (window.scrollY > 80) backTop.classList.add('is-visible');
        else backTop.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    window.setTimeout(onScroll, 400);

    /**
     * Mobile drawer for Divi Menu module (TB header).
     * Mounts a clone under header.et-l--header so it sits flush under the glass
     * bar, toggles gold hamburger↔X, and collapses cleanly on resize >980px.
     */
    (function initDiviMenuMobile() {
      var menuMod = document.querySelector('.ds-primary-menu.et_pb_menu');
      if (!menuMod || !tbHeader) return;
      var mobileNav = menuMod.querySelector('.mobile_nav');
      var bar = menuMod.querySelector('.mobile_menu_bar');
      if (!mobileNav || !bar) return;

      var MOBILE_MAX = 980;
      var drawer = null;

      function isMobile() {
        return window.matchMedia('(max-width: ' + MOBILE_MAX + 'px)').matches;
      }

      function buildDrawer() {
        if (drawer && drawer.parentNode) return drawer;
        var source = menuMod.querySelector('#menu-primary, ul.et-menu');
        if (!source) return null;
        drawer = document.createElement('ul');
        drawer.className = 'et_mobile_menu ds-mobile-drawer';
        drawer.id = 'ds-mobile-drawer';
        drawer.setAttribute('aria-hidden', 'true');
        // Copy only top-level links (no mega markup)
        source.querySelectorAll(':scope > li').forEach(function (li) {
          var a = li.querySelector(':scope > a');
          if (!a) return;
          var item = document.createElement('li');
          var link = document.createElement('a');
          link.href = a.getAttribute('href') || '#';
          link.textContent = a.textContent.trim();
          item.appendChild(link);
          drawer.appendChild(item);
        });
        // Keep empty in-menu clones from showing in-flow
        mobileNav.querySelectorAll('.et_mobile_menu').forEach(function (n) {
          n.remove();
        });
        tbHeader.appendChild(drawer);
        return drawer;
      }

      function setOpen(open) {
        if (open && !isMobile()) open = false;
        buildDrawer();
        mobileNav.classList.toggle('opened', open);
        mobileNav.classList.toggle('closed', !open);
        if (drawer) {
          drawer.classList.toggle('is-open', open);
          drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
        }
        bar.setAttribute('aria-expanded', open ? 'true' : 'false');
        bar.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      }

      function toggle() {
        setOpen(!mobileNav.classList.contains('opened'));
      }

      bar.setAttribute('role', 'button');
      bar.setAttribute('tabindex', '0');
      bar.setAttribute('aria-label', 'Open menu');
      bar.setAttribute('aria-expanded', 'false');
      mobileNav.classList.add('closed');
      mobileNav.classList.remove('opened');

      // Capture phase so Divi’s handler cannot swallow / re-toggle the click.
      bar.addEventListener(
        'click',
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          toggle();
        },
        true
      );
      bar.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });

      document.addEventListener('click', function (e) {
        if (!mobileNav.classList.contains('opened')) return;
        if (bar.contains(e.target) || (drawer && drawer.contains(e.target))) return;
        setOpen(false);
      });

      document.addEventListener('click', function (e) {
        var a = e.target && e.target.closest ? e.target.closest('#ds-mobile-drawer a') : null;
        if (!a) return;
        setOpen(false);
      });

      window.addEventListener(
        'resize',
        function () {
          if (!isMobile() && mobileNav.classList.contains('opened')) {
            setOpen(false);
          }
        },
        { passive: true }
      );
    })();

    // Legacy path: close if an old in-menu clone link is clicked.
    document.addEventListener(
      'click',
      function (e) {
        var link = e.target && e.target.closest ? e.target.closest('.ds-primary-menu .et_mobile_menu a') : null;
        if (!link) return;
        var mobileNav = document.querySelector('.ds-primary-menu .mobile_nav');
        if (mobileNav && mobileNav.classList.contains('opened')) {
          mobileNav.classList.remove('opened');
          mobileNav.classList.add('closed');
          var d = document.getElementById('ds-mobile-drawer');
          if (d) d.classList.remove('is-open');
        }
      },
      false
    );

    if (backTop) {
      backTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /**
     * Smooth-scroll same-page section hashes (/#work, #contact, etc.).
     */
    function headerOffset() {
      if (tbHeader) return Math.ceil(tbHeader.getBoundingClientRect().height) + 8;
      var h = document.querySelector('.ds-site-header');
      return h ? Math.ceil(h.getBoundingClientRect().height) + 8 : 72;
    }

    function scrollToHash(hash, replaceHistory) {
      if (!hash || hash === '#') return false;
      var id = decodeURIComponent(hash.replace(/^#/, ''));
      var el = document.getElementById(id);
      if (!el) return false;
      var top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset();
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth' });
      if (history.replaceState && replaceHistory) {
        history.replaceState(null, '', '#' + id);
      } else if (history.pushState && !replaceHistory) {
        history.pushState(null, '', '#' + id);
      }
      return true;
    }

    function isInPageHashLink(href) {
      if (!href || href === '#' || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) {
        return null;
      }
      var url;
      try {
        url = new URL(href, window.location.href);
      } catch (err) {
        return null;
      }
      if (url.origin !== window.location.origin || !url.hash) return null;
      var onHome =
        document.body.classList.contains('home') ||
        document.body.classList.contains('page-id-15');
      var linkPath = url.pathname.replace(/\/$/, '') || '';
      var herePath = window.location.pathname.replace(/\/$/, '') || '';
      if (linkPath === herePath) return url.hash;
      if (onHome && (linkPath === '' || url.pathname === '/')) return url.hash;
      return null;
    }

    document.addEventListener(
      'click',
      function (e) {
        var link = e.target && e.target.closest ? e.target.closest('a[href*="#"]') : null;
        if (!link) return;
        var hash = isInPageHashLink(link.getAttribute('href'));
        if (!hash) return;
        if (scrollToHash(hash, false)) {
          e.preventDefault();
        }
      },
      false
    );

    if (window.location.hash) {
      window.setTimeout(function () {
        scrollToHash(window.location.hash, true);
      }, 80);
    }

    // Legacy free-form hamburger (only if HTML revert is restored).
    var toggle = document.querySelector('.ds-nav-toggle');
    var nav = document.getElementById('ds-primary-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
        nav.classList.toggle('is-open', !open);
        toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      });
      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-label', 'Open menu');
        });
      });
    }
  });
})();
