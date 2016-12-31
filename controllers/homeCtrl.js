(function () {
    'use strict';

    angular
        .module('ISTE')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['isteData', '$rootScope'];

    function homeCtrl(isteData, $rootScope) {
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



    } //homeController
})();