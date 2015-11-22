$(window).load(function(){
	$('img.caption').captionjs({
	'class_name': 'captionjs', // Class name for each <figure>
    'schema': true,        // Use schema.org markup (i.e., itemtype, itemprop)
    'mode': 'animated',   // default | stacked | animated | hide
    'debug_mode': false,       // Output debug info to the JS console
    'force_dimensions': true,        // Force the dimensions in case they cannot be detected (e.g., image is not yet painted to viewport)
    'is_responsive': false,       // Ensure the figure and image change size when in responsive layout. Requires a container to control responsiveness!
    'inherit_styles': false  
});
});