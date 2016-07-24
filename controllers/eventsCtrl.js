(function () {
    'use strict';

    angular
        .module('ISTE')
        .controller('eventsCtrl', eventsCtrl);

    eventsCtrl.$inject = ['$route', '$scope', '$window', '$rootScope', 'isteData'];
    function eventsCtrl($route, $scope, $window, $rootScope, isteData) {
        // controllerAs scope
        var eventsVm = this;

        // get event data from the service
        eventsVm["center_event"] = isteData.centerEvent;
        var allevents = isteData.allEvents;
        // no below going

        eventsVm["allevents"] = [];
        for (var i = 0; i < allevents.length; i++) {
            allevents[i]["short_description"] = allevents[i]["description"].trim().split(" ", 30).join(" ") + "...";
            eventsVm["allevents"].push(allevents[i]);
            // extract short desp for each event

        }

    
        $rootScope["events"] = allevents;
        $rootScope["events"].push(eventsVm["center_event"]);

        eventsVm.search_loading = false;
        // search functionality implementation
        var regexp = new RegExp();
        $scope.$watch("events.event_search", function (newVal, oldVal) {
            if (!newVal) {
                return;
            }
            // we receive the user search here
            eventsVm.search_loading = true;
            regexp.compile(newVal, "gi");
            var search_match = [];
            for (var i = 0; i < allevents.length; i++) {
                var currentevent = allevents[i];
                var doesSearchMatch = regexp.exec(currentevent.title) || regexp.exec(currentevent.description) || regexp.exec(currentevent.year) || regexp.exec(currentevent.month) || regexp.exec(currentevent.registrationDetails.room_no) || regexp.exec(currentevent.registrationDetails.contact_no);
                if (doesSearchMatch != null) {
                    search_match.push(currentevent);
                }
            }//search test
            eventsVm["allevents"] = search_match;
            //remove loading after we find the results
            eventsVm.search_loading = false;
        });//$scope.watch
        // search implementaion end



        // when user clicks a year displayed on right
        // auto search by changing the value of modal[eventsVm.event_Search]
        eventsVm.selectedYear = function (e) {
            $window.scrollTo(0, 740);
            var btns = document.getElementsByClassName("event-history-view-years");
            for (var v = 0; v < btns.length; v++) {
                btns[v].classList.remove("active");
            }
            e.target.classList.add("active");
            //   console.log(e.target.getAttribute("data-year"));
            var selectedYear = e.target.getAttribute("data-year");
            eventsVm.event_search = selectedYear;
        }//selectedYear

    }//eventsCtrl end
})();