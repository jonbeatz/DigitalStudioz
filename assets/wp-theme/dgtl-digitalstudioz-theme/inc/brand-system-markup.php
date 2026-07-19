<?php
/**
 * Gold & Grey brand system markup (static HTML for the style wall).
 */
defined( 'ABSPATH' ) || exit;

/**
 * @return string
 */
function dsz_get_brand_system_markup() {
	ob_start();
	?>
<div id="ds-brand" class="ds-brand">
	<header class="ds-brand__hero">
		<p class="ds-brand__eyebrow">DigitalStudioz — Brand System</p>
		<h1 class="ds-brand__title">Gold &amp; <span>Grey</span></h1>
		<p class="ds-brand__lede">Living style wall for the production site — dark canvas, gold accent, warm off-white type. This is the brand look. Elegant Themes freebie walls are not.</p>
	</header>

	<section class="ds-brand__section" aria-labelledby="ds-colors">
		<p class="ds-brand__section-label">01 · Palette</p>
		<h2 class="ds-brand__section-title" id="ds-colors">Color</h2>
		<p class="ds-brand__section-note">Primary drives buttons and accents. Heading text is warm off-white for dark surfaces — never put it on white.</p>
		<div class="ds-brand__swatches">
			<article class="ds-brand__swatch">
				<div class="ds-brand__swatch-chip" style="background:#D3B670"></div>
				<div class="ds-brand__swatch-meta">
					<p class="ds-brand__swatch-name">Gold1 · Primary</p>
					<p class="ds-brand__swatch-hex">#D3B670</p>
					<p class="ds-brand__swatch-use">CTAs, accents, highlights</p>
				</div>
			</article>
			<article class="ds-brand__swatch">
				<div class="ds-brand__swatch-chip" style="background:#E8CD9A"></div>
				<div class="ds-brand__swatch-meta">
					<p class="ds-brand__swatch-name">Satin Gold</p>
					<p class="ds-brand__swatch-hex">#E8CD9A</p>
					<p class="ds-brand__swatch-use">Hover / soft gold</p>
				</div>
			</article>
			<article class="ds-brand__swatch">
				<div class="ds-brand__swatch-chip" style="background:#121212"></div>
				<div class="ds-brand__swatch-meta">
					<p class="ds-brand__swatch-name">DarkGrey1</p>
					<p class="ds-brand__swatch-hex">#121212</p>
					<p class="ds-brand__swatch-use">Page void / hero BG</p>
				</div>
			</article>
			<article class="ds-brand__swatch">
				<div class="ds-brand__swatch-chip" style="background:#2A2826"></div>
				<div class="ds-brand__swatch-meta">
					<p class="ds-brand__swatch-name">Deep Charcoal</p>
					<p class="ds-brand__swatch-hex">#2A2826</p>
					<p class="ds-brand__swatch-use">Cards / surfaces</p>
				</div>
			</article>
			<article class="ds-brand__swatch">
				<div class="ds-brand__swatch-chip" style="background:#F5F0E8"></div>
				<div class="ds-brand__swatch-meta">
					<p class="ds-brand__swatch-name">Warm Off-White</p>
					<p class="ds-brand__swatch-hex">#F5F0E8</p>
					<p class="ds-brand__swatch-use">Headings on dark</p>
				</div>
			</article>
			<article class="ds-brand__swatch">
				<div class="ds-brand__swatch-chip" style="background:#817E79"></div>
				<div class="ds-brand__swatch-meta">
					<p class="ds-brand__swatch-name">LightGrey · Body</p>
					<p class="ds-brand__swatch-hex">#817E79</p>
					<p class="ds-brand__swatch-use">Body / muted copy</p>
				</div>
			</article>
			<article class="ds-brand__swatch">
				<div class="ds-brand__swatch-chip" style="background:#5B6F7A"></div>
				<div class="ds-brand__swatch-meta">
					<p class="ds-brand__swatch-name">Slate Blue</p>
					<p class="ds-brand__swatch-hex">#5B6F7A</p>
					<p class="ds-brand__swatch-use">Secondary / links</p>
				</div>
			</article>
			<article class="ds-brand__swatch">
				<div class="ds-brand__swatch-chip" style="background:#8A7A6A"></div>
				<div class="ds-brand__swatch-meta">
					<p class="ds-brand__swatch-name">Soft Umber</p>
					<p class="ds-brand__swatch-hex">#8A7A6A</p>
					<p class="ds-brand__swatch-use">Labels / dividers</p>
				</div>
			</article>
		</div>
	</section>

	<section class="ds-brand__section" aria-labelledby="ds-type">
		<p class="ds-brand__section-label">02 · Type</p>
		<h2 class="ds-brand__section-title" id="ds-type">Typography</h2>
		<p class="ds-brand__section-note">Mulish throughout. Shown on charcoal so contrast matches the live site.</p>
		<div class="ds-brand__type-stack">
			<div class="ds-brand__type-row"><span class="ds-brand__type-tag">H1</span><p class="ds-brand__type-sample is-h1">We Build Digital Experiences</p></div>
			<div class="ds-brand__type-row"><span class="ds-brand__type-tag">H2</span><p class="ds-brand__type-sample is-h2">Services that scale with you</p></div>
			<div class="ds-brand__type-row"><span class="ds-brand__type-tag">H3</span><p class="ds-brand__type-sample is-h3">3D web · AI · Automation</p></div>
			<div class="ds-brand__type-row"><span class="ds-brand__type-tag">H4</span><p class="ds-brand__type-sample is-h4">Project case study title</p></div>
			<div class="ds-brand__type-row"><span class="ds-brand__type-tag">H5</span><p class="ds-brand__type-sample is-h5">Card title / panel heading</p></div>
			<div class="ds-brand__type-row"><span class="ds-brand__type-tag">H6</span><p class="ds-brand__type-sample is-h6">Section eyebrow</p></div>
			<div class="ds-brand__type-row"><span class="ds-brand__type-tag">Body</span><p class="ds-brand__type-sample is-body">Full-stack development and automation — built with precision by a studio that codes. Body text stays LightGrey on dark surfaces for comfortable reading.</p></div>
			<div class="ds-brand__type-row"><span class="ds-brand__type-tag">Small</span><p class="ds-brand__type-sample is-small">Captions, helper text, and meta labels use Soft Umber.</p></div>
		</div>
	</section>

	<section class="ds-brand__section" aria-labelledby="ds-ui">
		<p class="ds-brand__section-label">03 · UI</p>
		<h2 class="ds-brand__section-title" id="ds-ui">Buttons &amp; fields</h2>
		<p class="ds-brand__section-note">Primary = gold fill + dark text. Ghost = outline on dark. Field shells sit on charcoal.</p>
		<div class="ds-brand__split">
			<div class="ds-brand__card">
				<p class="ds-brand__card-title">Buttons</p>
				<div class="ds-brand__btn-row">
					<span class="ds-btn ds-btn-primary">Primary CTA</span>
					<span class="ds-btn ds-btn-ghost">Ghost CTA</span>
				</div>
			</div>
			<div class="ds-brand__card">
				<p class="ds-brand__card-title">Field shells</p>
				<div class="ds-brand__form">
					<span class="ds-brand__field-label">Name</span>
					<span class="ds-brand__field">Your name</span>
					<span class="ds-brand__field-label">Email</span>
					<span class="ds-brand__field">you@studio.com</span>
					<span class="ds-brand__field-label">Message</span>
					<span class="ds-brand__field ds-brand__field--area">Tell us about the project</span>
					<div class="ds-brand__btn-row" style="margin-top:8px">
						<span class="ds-btn ds-btn-primary">Send message</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<p class="ds-brand__foot">Visual source of truth for Gold &amp; Grey. Old ET walls at <code>/dsz-design-system-*</code> redirect here.</p>
</div>
	<?php
	return (string) ob_get_clean();
}
