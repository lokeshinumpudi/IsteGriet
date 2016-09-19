(function () {
    'use strict';

    angular
        .module('ISTE')
        .controller('eventDetailCtrl', eventDetailCtrl);

    eventDetailCtrl.$inject = ['$rootScope', '$route', 'isteData'];
    function eventDetailCtrl($rootScope, $route, isteData) {
        var eventDetail = this;
        eventDetail.event = {};
        
        // console.log($route.current.params);
        if ($rootScope.events) {
            for (var i = 0; i < $rootScope.events.length; i++) {
                if ($rootScope.events[i]["event_link"] == "#/event/" + $route.current.params.eventname) {
                    eventDetail.event = $rootScope.events[i];
                }
            }//for
        }//rootscope.events
        else {
            //well try to explicity load all events data
            var AllEvents = [];
            // console.log(isteData)
            var totalevents = isteData.allEvents.length + isteData.mela_rest.length + 2;
            AllEvents.push(isteData.centerEvent)
            AllEvents.push(isteData.mela_main);
            for (var i = 0; i < isteData.allEvents.length; i++) {
                AllEvents.push(isteData.allEvents[i]);
            }
             for (var i = 0; i < isteData.mela_rest.length; i++) {
                AllEvents.push(isteData.mela_rest[i]);   
            }

            for (var i = 0; i < AllEvents.length; i++) {
                if (AllEvents[i]["event_link"] == "#/event/" + $route.current.params.eventname) {
                    eventDetail.event = AllEvents[i];
                }
            }//for
        }
        // console.log(eventDetail.event);
    }//eventDetailCtrl
})();