$(function(){
	var scrollStopEvent = new $.Event("scrollstop");
	var delay = 200;
	var timer;
	function scrollStopEventTrigger(){
    	if (timer) {
    		clearTimeout(timer);
    	}
    	timer = setTimeout(function(){$(window).trigger(scrollStopEvent)}, delay);
  	}
 	$(window).on("scroll", scrollStopEventTrigger);
  	$("body").on("touchmove", scrollStopEventTrigger);
});