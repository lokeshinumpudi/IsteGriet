(function () {
    'use strict';

    angular
        .module('ISTE')
        .controller('eventsCtrl', eventsCtrl);

    eventsCtrl.$inject = ['$route', '$scope', '$window', '$rootScope', 'isteData'];

    function eventsCtrl($route, $scope, $window, $rootScope, isteData) {

        if ($rootScope["alreadyShifted"] == undefined) {
            $rootScope["alreadyShifted"] = false;
        }
        //variables
        var allevents = [];
        var searchData;
        //to prevent multiple cachings
        if (!$rootScope["cachedEvents"]) {
            $rootScope["cachedEvents"] = false;
        }
        // controllerAs scope
        var eventsVm = this;
        // defaults
        eventsVm.noresults = false;

        //if cache exists dont fetch from server again
        if ($rootScope["events"].length > 5) {
            console.log("cache exists!");
            allevents = $rootScope["events"];
            doWork(allevents);
            //fill required data
            eventsVm["center_event"] = [];
            eventsVm["center_event"].push(isteData.centerEvent());
            searchData = isteData.searchData();
        } else {
            // console.log($rootScope["events"].length,"rootscope");
            // get event data from the service
            isteData.allEvents().then(function (res) {
                //clean the data received from firebase
                var keys = Object.keys(res.data);
                keys.forEach(function (key) {
                    var xevent = res.data[key];
                    allevents.push(xevent);
                });

                //cache the results if not already done
                if (!$rootScope["cachedEvents"]) {
                    allevents.forEach(function (e) {
                        $rootScope["events"].push(e);
                    });
                    //push center event
                    $rootScope["events"].push(isteData.centerEvent());
                }
                $rootScope["cachedEvents"] = true;
                //fill required data
                eventsVm["center_event"] = [];
                eventsVm["center_event"].push(isteData.centerEvent());
                searchData = isteData.searchData();
                //call to do rest of the work;
                doWork(allevents);
            }, function (err) {
                console.log(err);
            }); //isteData.allEvents
        }
        // no below going
        function doWork(allevents) {

            eventsVm["allevents"] = [];
            for (var i = 0; i < allevents.length; i++) {
                allevents[i]["short_description"] = allevents[i]["description"].trim().split(" ", 30).join(" ") + "...";
                allevents[i]["fulldate"] = isteData.returndate(allevents[i].year, allevents[i].month, allevents[i].day);
                eventsVm["allevents"].push(allevents[i]);
                // extract short desp for each event
            }

            //Sort the events if not already done by service

            console.log(isteData.isWorkAlreadyDone());

            // // reasign after sorting
            var sortedEvents = allevents.sort(function (a, b) {
                if (a.fulldate < b.fulldate) {
                    return 1;
                } else if (a.fulldate > b.fulldate) {
                    return -1;
                }
                return 0;
            });
            //shift only once 

            if (!$rootScope["alreadyShifted"]) {
                sortedEvents.shift();
                $rootScope["alreadyShifted"] = true;
            }
            eventsVm["allevents"] = sortedEvents

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
                } //search test
                // console.log(search_match);
                //notify when search not found
                if (search_match.length == 0) {
                    eventsVm.noresults = true;

                } else {
                    eventsVm.noresults = false;
                }

                for (var i = 0; i < search_match.length; i++) {
                    //  console.log(search_match[i]["description"].length);
                    search_match[i]["short_description"] = search_match[i]["description"].trim().split(" ", 30).join(" ") + "...";
                    // eventsVm["allevents"].push(search_match[i]);
                    // extract short desp for each event
                }

                // update ui with latest search match data
                eventsVm["allevents"] = search_match;
                // $scope.$apply();
                //remove loading after we find the results
                eventsVm.search_loading = false;
            }); //$scope.watch
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
                } //selectedYear

        }; //doWork end

    } //eventsCtrl end
})();