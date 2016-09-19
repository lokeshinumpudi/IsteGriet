(function () {
    'use strict';

    angular
        .module('ISTE')
        .controller('melaCtrl', melaCtrl);

    melaCtrl.$inject = ['$route', '$scope', '$window', '$rootScope','isteData'];
    function melaCtrl($route, $scope, $window, $rootScope,isteData) {
        var mela = this;

        //fetch mela data from service
        mela["mela_main"] =isteData.mela_main;
        var mela_rest = isteData.mela_rest;

        mela["allevents"] = [];
        for (var i = 0; i < mela_rest.length; i++) {
            mela["allevents"].push(mela_rest[i]);
        }
        mela["allevents"].forEach(function (eachEvent) {
            eachEvent.test_random_code = Date.now() + Math.random() * 30;
        });
        $rootScope["events"] = mela_rest;
        $rootScope["events"].push(mela["mela_main"]);
        mela.search_loading = false;
    }//eventsCtrl end
})();