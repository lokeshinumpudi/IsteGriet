(function () {
    'use strict';

    angular
        .module('ISTE')
        .controller('teamCtrl', teamCtrl);

    teamCtrl.$inject = ['$scope', 'isteData'];
    function teamCtrl($scope, isteData) {
        var team = this;
        team.names = [];
        var yearToNames = {
            "2016": "names16",
            "2015": "names15"
        };
        var selectedyearDefault = "2016";
        team.names = isteData.names16;
        var teambtns = document.getElementsByClassName("team-year-btns");
        team.btnclicked = function (e) {
            // clear active class
            for (var i = 0; i < teambtns.length; i++) {
                teambtns[i].classList.remove("active");
            }
            e.target.classList.add("active");
            var selectedyear = e.target.getAttribute("data-year");
            // change data of scope according to selection tab
                team.names = isteData[yearToNames[selectedyear]];
        }   //btnclicked    


    }//teamCtrl end
})();