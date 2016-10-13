(function () {
    'use strict';

    angular
        .module('ISTE')
        .controller('eventDetailCtrl', eventDetailCtrl);

    eventDetailCtrl.$inject = ['$rootScope', '$route', 'isteData'];
    function eventDetailCtrl($rootScope, $route, isteData) {
        var eventDetail = this;
        eventDetail.notFound = false;

        eventDetail.event = {};
        window.scrollTo(0,75);

        // console.log($route.current.params);

        // CACHE data if available
        if ($rootScope.events.length >7) {
            
            for (var i = 0; i < $rootScope.events.length; i++) {
                // fetch the data matching the current route
                if ($rootScope.events[i]["event_link"] == "#/event/" + $route.current.params.eventname) {
                    eventDetail.event = $rootScope.events[i];
                }
            }//for
            // check if data available at the end
             
             //  when user enters wrong url!
             if(eventDetail.event.description == undefined || eventDetail.event.description == null){
                 noDataFound();
             }
        }//rootscope.events

        // Fresh loading or first time loading
        else {
            //well try to explicity load all events data
            var AllEvents = [];
            var totalevents = isteData.allEvents.length + isteData.mela_rest.length + 2;
            // Simply populate all event data together
            AllEvents.push(isteData.centerEvent)
            AllEvents.push(isteData.mela_main);

            console.log(AllEvents);
            for (var i = 0; i < isteData.allEvents.length; i++) {
                AllEvents.push(isteData.allEvents[i]);
            }
            for (var i = 0; i < isteData.mela_rest.length; i++) {
                AllEvents.push(isteData.mela_rest[i]);
            }
            // populating over

// fetch the data matching the current route
            for (var i = 0; i < AllEvents.length; i++) {
                if (AllEvents[i]["event_link"] == "#/event/" + $route.current.params.eventname) {
                    eventDetail.event = AllEvents[i];
                   
                }
            }//for

            //  console.log(eventDetail.event);
            //  when user enters wrong url!
             if(eventDetail.event.description == undefined || eventDetail.event.description == null){
                 noDataFound();
             }
            
        }//if/else

        function noDataFound(){
            eventDetail.notFound = true;
        }

        eventDetail.tryreloading = function(){
            location.reload();
        }


        // console.log(eventDetail.event);
    }//eventDetailCtrl
})();