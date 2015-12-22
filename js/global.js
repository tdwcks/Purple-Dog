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

	// Put Courses Video After title Fix I tired to be too clever

	$(".active #js-video").insertBefore("#js-paragraph");

	// Scroll to clicked item

	$(".js-course-picker").on( "click", coursePick);

	function coursePick() {
		var id = $(this).attr('id')
		var courseId = '#course-' + id;

		// Removes active from everything 

		$('.js-course-picker').removeClass('active');
		$('.course-showcase').removeClass('active');

		// Add's Active To New Item

		$(this).toggleClass('active');
		$(courseId).toggleClass('active');
		$("html, body").animate({ scrollTop: $(courseId).offset().top }, 1000);
	}

	// Get rid of break

	$('#js-break').html('Looking for courses for more than 12 attendees we can adapt our courses for you. Call Ian on 01484 546780')

});

$(function(){ 

	// Scrolls to top on click

	$(".js-link-to-top").on( "click", scrollTop);

	function scrollTop() {
		$("html, body").animate({
            scrollTop: 0
        }, 600);
		return false;
	}

	// Switch Courses Tab

	$(".js-switcher").on( "click", switchItem);

	function switchItem() {
		var id = $(this).attr('id')
		var switchTo = '#switch-' + id;

		// Removes active from everything 

		$('.js-switcher').removeClass('active');
		$('.switch-holder').removeClass('active');

		// Add's Active To New Item

		$(this).toggleClass('active');	
		$(switchTo).toggleClass('active');	
	}

	// Courses Showcase Switcher 

	$(".js-course-picker").on( "click", coursePick);

	function coursePick() {
		var id = $(this).attr('id')
		var courseId = '#course-' + id;

		// Removes active from everything 

		$('.js-course-picker').removeClass('active');
		$('.course-showcase').removeClass('active');

		// Add's Active To New Item

		$(this).toggleClass('active');
		$(courseId).toggleClass('active');	
	}

	// Course Showcase Accordian

	$(".js-accrodian-course").on( "click", launchAccordian);

	function launchAccordian() {
		$(".course-details").toggleClass('active');
	}

	// Date picker

	$(".js-date-picker").on( "click", monthPick);

	function monthPick() {
		var id = $(this).attr('id')
		var monthId = '#month-' + id;

		// Removes active from everything 

		$('.js-date-picker').removeClass('active');
		$('.dates-holder').removeClass('active');

		// Add's Active To New Item

		$(this).addClass('active');
		$(monthId).addClass('active');

	}

	// session selector

	$(".js-session-selector").on( "click", selectSession);

	function selectSession() {

		$(".js-session-selector").removeClass('active');
		$(this).addClass('active');
	}

	// Attendee Picker

	$(".js-attendee-picker").on( "click", selectAttendees);

	function selectAttendees() {

		$(".js-attendee-picker").removeClass('active');
		$(this).addClass('active');
	}

});