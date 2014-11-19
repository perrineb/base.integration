
(function () {
    "use strict";


    var $  = jQuery.noConflict();

    var ie_version = $(document).getInternetExplorerVersion();

    var breakpoint = '640px';      


	$(document).ready(function() {


        if(ie_version !== -1) {
            bind_events_for_desktop();

        } else {
            if (matchMedia('only all and (max-width: ' + breakpoint + ')').matches) {
                // smartphone
                bind_events_for_smartphone();
            
            } else {
                // gabarit normal
                bind_events_for_desktop();
            }
        }
		
   	});


    $(window).resize(function() {

        if(ie_version === -1) {

            if (matchMedia('only all and (max-width: ' + breakpoint + ')').matches) {
                // smartphone
                unbind_events_for_desktop();
                bind_events_for_smartphone();
            
            } else {
                // desktop
                unbind_events_for_smartphone();
                bind_events_for_desktop();
            }
        }
       
    });



    // * * SMARTPHONE * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //


    function bind_events_for_smartphone () {

    }

    function unbind_events_for_smartphone () {
        
    }


    // * * DESKTOP * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //

    function bind_events_for_desktop () {

    }

    function unbind_events_for_desktop () {

    }


    // * * FUNCTIONS * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //




}(jQuery));
