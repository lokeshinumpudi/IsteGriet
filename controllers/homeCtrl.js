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

            console.log(data);
        }).catch(function (err) {

        });



        //announcements logic

        home.announcements = [{
            title: "Workshop on Angular.js",
            link: ""

        }, {
            title: "Workshop on Node.js",
            link: ""

        }, {
            title: "Workshop on JavaScript",
            link: ""
        }, ];

        function makeAllInactive() {
            //default all are inactive
            home.announcements.forEach(function (anc) {
                anc.active = false;
            });
        }
        makeAllInactive();

        //first one is active by default
        home.announcements[0].active = true;

        var index = 0;
        //every 400ms make one announcement active
        $interval(function () {
            //reset all
            makeAllInactive();
            index++;
            //when end of loop reset counter
            if(index >=home.announcements.length){
                index = 0;
            }
            //make this index active
             home.announcements[index].active = true;
        }, 3000)



    } //homeController
})();