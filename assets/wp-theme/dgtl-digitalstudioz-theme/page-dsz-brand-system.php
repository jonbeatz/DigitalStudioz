<?php
/**
 * Template for /dsz-brand-system/ (page-{slug}.php hierarchy).
 * Bypasses Divi text-module HTML mangling. Theme Builder still wraps header/footer.
 */
defined( 'ABSPATH' ) || exit;

get_header();
?>
<div id="main-content" class="ds-brand-main">
	<div class="container" style="width:100%;max-width:100%;padding:0">
		<div id="content-area" class="clearfix">
			<div id="left-area">
				<article id="post-<?php the_ID(); ?>" <?php post_class( 'ds-brand-article' ); ?>>
					<div class="entry-content">
						<?php
						// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static theme markup.
						echo dsz_get_brand_system_markup();
						?>
					</div>
				</article>
			</div>
		</div>
	</div>
</div>
<?php
get_footer();
