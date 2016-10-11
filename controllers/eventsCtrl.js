(function () {
    'use strict';

    angular
        .module('ISTE')
        .controller('eventsCtrl', eventsCtrl);

    eventsCtrl.$inject = ['$route', '$scope', '$window', '$rootScope', 'isteData'];
    function eventsCtrl($route, $scope, $window, $rootScope, isteData) {
        // controllerAs scope
        var eventsVm = this;
        // defaults
        eventsVm.noresults = false;
        // eventsVm.event_search = "";

        // get event data from the service
        eventsVm["center_event"] = isteData.centerEvent;
        var allevents = isteData.allEvents;
        var searchData = isteData.searchData;
        // no below going

        eventsVm["allevents"] = [];
        for (var i = 0; i < allevents.length; i++) {
            allevents[i]["short_description"] = allevents[i]["description"].trim().split(" ", 30).join(" ") + "...";
            eventsVm["allevents"].push(allevents[i]);
            // extract short desp for each event

            // cache for event description view
            // save to cache for faster load on revisit
             $rootScope["events"].push(allevents[i]);

        }


        
       
        
        

        // hint change of search text
        eventsVm.hintClick = function ($event) {
            eventsVm.event_search = "Digital Marketing";
        }

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
            for (var i = 0; i < searchData.length; i++) {
                var currentevent = searchData[i];
                var doesSearchMatch = regexp.exec(currentevent.title) || regexp.exec(currentevent.description) || regexp.exec(currentevent.year) || regexp.exec(currentevent.month) || regexp.exec(currentevent.registrationDetails.room_no) || regexp.exec(currentevent.registrationDetails.contact_no);
                if (doesSearchMatch != null) {

                    search_match.push(currentevent);
                }
            }//search test
            // console.log(search_match);
            //notify when search not found

            if (search_match.length == 0) {
                eventsVm.noresults = true;

            } else {
                eventsVm.noresults = false;
            }
            // console.log(eventsVm.noresults);

            

         for (var i = 0; i < search_match.length; i++) {

             console.log(search_match[i]["description"].length);
             search_match[i]["short_description"] = search_match[i]["description"].trim().split(" ", 30).join(" ") + "...";
            // eventsVm["allevents"].push(search_match[i]);
            // extract short desp for each event

        }

            eventsVm["allevents"] = search_match;

            // $scope.$apply();
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