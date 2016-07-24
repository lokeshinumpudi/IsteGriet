(function() {
'use strict';

    angular
        .module('ISTE')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$route'];
    function homeCtrl($route) {
        var home = this;


        home.name = "ISTE"
        

        
    }//homeController
})();