<?php
/**
 * DigitalStudioz Divi child theme.
 */
defined( 'ABSPATH' ) || exit;

require_once get_stylesheet_directory() . '/inc/brand-system-markup.php';

add_action( 'wp_enqueue_scripts', function () {
	$theme_version = wp_get_theme()->get( 'Version' );
	$style_path    = get_stylesheet_directory() . '/style.css';
	$script_path   = get_stylesheet_directory() . '/js/core-scripts.js';
	// filemtime busts browser cache harder than theme Version alone (frozen tabs).
	$style_ver  = file_exists( $style_path ) ? $theme_version . '.' . filemtime( $style_path ) : $theme_version;
	$script_ver = file_exists( $script_path ) ? $theme_version . '.' . filemtime( $script_path ) : $theme_version;

	wp_enqueue_style(
		'dgtl-digitalstudioz-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap',
		array(),
		null
	);

	wp_enqueue_style(
		'dgtl-digitalstudioz-parent',
		get_template_directory_uri() . '/style.css',
		array( 'dgtl-digitalstudioz-fonts' ),
		wp_get_theme( 'Divi' )->get( 'Version' )
	);
	wp_enqueue_style(
		'dgtl-digitalstudioz-child',
		get_stylesheet_uri(),
		array( 'dgtl-digitalstudioz-parent' ),
		$style_ver
	);

	// Custom front-end JS — edit js/core-scripts.js as needed.
	wp_enqueue_script(
		'dgtl-digitalstudioz-core',
		get_stylesheet_directory_uri() . '/js/core-scripts.js',
		array(),
		$script_ver,
		true
	);
} );

/**
 * Nav glass CSS printed late so it wins over Divi dynamic sticky BG.
 * See DIVI5-Layout-Polish-Log.md (v0.5.2 stacked-opacity fix).
 */
add_action(
	'wp_footer',
	function () {
		if ( is_admin() ) {
			return;
		}
		echo '<style id="ds-nav-glass-override">'
			. 'header.et-l--header{position:fixed!important;left:0;right:0;width:100%;z-index:10020!important;'
			. 'background-color:rgba(10,10,11,0.94)!important;'
			. 'backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);'
			. 'border-bottom:1px solid transparent;}'
			. 'body.admin-bar header.et-l--header{top:32px!important;}'
			. '@media screen and (max-width:782px){body.admin-bar header.et-l--header{top:46px!important;}}'
			. 'header.et-l--header.is-scrolled{background-color:rgba(10,10,11,0.28)!important;'
			. 'backdrop-filter:blur(10px) saturate(150%);-webkit-backdrop-filter:blur(10px) saturate(150%);'
			. 'border-bottom-color:rgba(245,240,232,0.08);}'
			. 'header.et-l--header .et_pb_section,'
			. 'header.et-l--header .et_pb_section.et_pb_sticky,'
			. 'header.et-l--header .et_pb_section.et_pb_sticky--top{'
			. 'position:relative!important;top:auto!important;left:auto!important;right:auto!important;'
			. 'bottom:auto!important;width:100%!important;transform:none!important;z-index:auto!important;}'
			. 'header.et-l--header .et_pb_section,'
			. 'header.et-l--header .et_pb_section.et_pb_sticky,'
			. 'header.et-l--header .et_pb_section.et_pb_sticky--top,'
			. 'header.et-l--header .et_builder_inner_content,'
			. 'header.et-l--header .et_pb_row,'
			. 'header.et-l--header .et_pb_column,'
			. 'header.et-l--header .et_pb_text,'
			. 'header.et-l--header .et_pb_text_inner,'
			. 'header.et-l--header .et_pb_menu,'
			. 'header.et-l--header .ds-primary-menu,'
			. 'header.et-l--header .ds-site-header,'
			. 'header.et-l--header .ds-site-header.is-scrolled,'
			. 'header.et-l--header .ds-site-header__inner{'
			. 'background:transparent!important;background-color:transparent!important;'
			. 'background-image:none!important;backdrop-filter:none!important;'
			. '-webkit-backdrop-filter:none!important;box-shadow:none!important;}'
			. '</style>' . "\n";
	},
	999
);

/**
 * ACF Local JSON save/load path.
 */
add_filter( 'acf/settings/save_json', function () {
	return get_stylesheet_directory() . '/acf-json';
} );
add_filter( 'acf/settings/load_json', function ( $paths ) {
	$paths[] = get_stylesheet_directory() . '/acf-json';
	return $paths;
} );

/**
 * Reliable body class for the Brand System page (WP/Divi may omit page-{slug}).
 */
add_filter( 'body_class', function ( $classes ) {
	if ( is_page( 'dsz-brand-system' ) ) {
		$classes[] = 'page-dsz-brand-system';
	}
	if ( is_page( 'dsz-brand-system-divi' ) ) {
		$classes[] = 'page-dsz-brand-system-divi';
		$classes[] = 'et_pb_pagebuilder_layout';
		$classes[] = 'et_full_width_page';
	}
	return $classes;
} );

/**
 * Old ET design-system walls → real Brand System page.
 */
add_action( 'template_redirect', function () {
	if ( is_admin() ) {
		return;
	}
	$req  = isset( $_SERVER['REQUEST_URI'] ) ? wp_unslash( $_SERVER['REQUEST_URI'] ) : '';
	$path = wp_parse_url( $req, PHP_URL_PATH );
	$path = is_string( $path ) ? untrailingslashit( $path ) : '';
	$retired = array(
		'/dsz-design-system-elements',
		'/dsz-design-system-og-presets',
		'/dsz-type-spec-fluid',
	);
	if ( in_array( $path, $retired, true ) ) {
		wp_safe_redirect( home_url( '/dsz-brand-system/' ), 301 );
		exit;
	}
}, 1 );
