(function () {
    'use strict';

    angular
        .module('ISTE')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['isteData', '$rootScope', '$interval'];

    function homeCtrl(isteData, $rootScope, $interval) {
        var home = this;

        home.recentEvents = null;
        if ($rootScope["dataPresent"] == undefined) {
            $rootScope["dataPresent"] = false;
        }
        if ($rootScope["dataPresent"] == true) {
            //already data present
            home.recentEvents = $rootScope["recentEvents"];
            return;
        }

        isteData.getRecentEvents().then(function (data) {
            //cache 
            $rootScope["recentEvents"] = data;
            home.recentEvents = data;
            $rootScope["dataPresent"] = true;

            // console.log(data);
        }).catch(function (err) {

        });


        //announcements logic
        isteData.getAnnouncements().then(function (tempdata) {
            var data = [];
            var keys = Object.keys(tempdata);
            keys.forEach(function (key) {
                data.push(tempdata[key]);
            });
            home.announcements = data;
            home.announcementsCount = keys.length;
            //default all are inactive
            makeAllInactive();
            //first one is active by default
            home.announcements[0].active = true;

        }).catch(function (err) {
            console.error(err);
        });

        function makeAllInactive() {
            //default all are inactive
            home.announcements.forEach(function (anc) {
                anc.active = false;
            });
        }




        var index = 0;
        //every 400ms make one announcement active
        $interval(function () {
            //reset all
            makeAllInactive();
            index++;
            //when end of loop reset counter
            if (index >= home.announcements.length) {
                index = 0;
            }
            //make this index active
            home.announcements[index].active = true;
        }, 3000)



    } //homeController
})();