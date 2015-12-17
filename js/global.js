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
    	$( "header .dropdown").on( "click", dropdown );
    	
    	function dropdown() {
    		var ddClicked = $(this).children("ul");
		  	$(ddClicked).toggleClass('dd-active');
		  	$(this).toggleClass('dd-active');
		}

		// Mobile Trigger

		$( "header .mobile-trigger").on( "click", menuTrigger);

		function menuTrigger() {
			$('nav').toggleClass('menu-active');
		}

    });