<?php
/**
 * @package WordPress
 * @subpackage Yoko
 */
?>

<div id="secondary" class="widget-area" role="complementary">
		<center><?php if ( ! dynamic_sidebar( 'sidebar-1' ) ) : ?>
				
				<?php endif; // end sidebar 1 widget area ?></center>
		</div><!-- #secondary .widget-area -->
<!-- end main -->
</div>
		<div id="tertiary" class="widget-area" role="complementary">
			<center><?php if ( ! dynamic_sidebar( 'sidebar-2' ) ) : ?></center>
			
		<?php endif; // end sidebar 2 widget area ?>
		</div><!-- end tertiary .widget-area -->