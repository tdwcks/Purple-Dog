// 4D 69 6C 6E  4C 74 64
// =================================================================
// 		Miln Ltd
// 			Digital Experiences
// 		Global Javascript Functions
// =================================================================

/// This reorders things for smaller screens 

ResponsiveJS.bind('(min-width: 320px) and (max-width: 810px)', 
    function() {

    	$("header .col-right").insertBefore("#js-logo");

    });