(function () {
    'use strict';

    angular
        .module('ISTE')
        .controller('melaCtrl', melaCtrl);

    melaCtrl.$inject = ['$route', '$scope', '$window', '$rootScope', 'isteData'];

    function melaCtrl($route, $scope, $window, $rootScope, isteData) {
        var mela = this;
        if(!$rootScope["melaCached"]){
        $rootScope["melaCached"] = false;
        }
        //fetch mela data from service
        mela["mela_main"] = isteData.mela_main;
        var mela_rest = isteData.mela_rest;
        // console.log(mela_rest);
        mela["allevents"] = [];
        for (var i = 0; i < mela_rest.length; i++) {
            mela["allevents"].push(mela_rest[i]);

            //cache the results
            if (!$rootScope["melaCached"] ) {
                // console.log("not cached");
                $rootScope["events"].push(mela_rest[i]);
            }
            // console.log($rootScope.events);
        }

        if(!$rootScope["melaCached"] ){
            $rootScope["events"].push(mela["mela_main"]);
        }

        $rootScope["melaCached"]  = true;
        // mela["allevents"].forEach(function (eachEvent) {
        //     eachEvent.test_random_code = Date.now() + Math.random() * 30;
        // });
        // 
        // 
        mela.search_loading = false;
    } //eventsCtrl end
})();