(function () {
    'use strict';

    angular
        .module('ISTE')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$route', "$interval"];
    function homeCtrl($route, $interval) {
        var home = this;
        home.name = "ISTE"
        // var divs = document.getElementsByClassName("title");

        var count = 1;

        home.title1 = false;
        home.hidetitle1 = true;

        home.title2 = false;
        home.hidetitle2 = true;

        home.title3 = true;
        home.hidetitle3 = false;

        $interval(function () {
            for (var i = 1; i < 4; i++) {
                //first find which is currently active and make it inactive
                if (home["title" + i]) {
                    home["title" + i] = false;
                    home["hidetitle" + i] = true;
                    //now that current ele is inactive find the next element and make it active
                    //small condition to cycle the elements
                    if (i == 3) {
                        count = 1;
                    } else {
                        count = i + 1;
                    }
                    //now count is the next element that is supposed to be made active
                    home["title" + count] = true;
                    home["hidetitle" + count] = false;
                    //now that we made the next item active stop the loop from going furthur
                    console.log("currently active:", count);
                    break;
                }//if
            }
        }, 3600);

        // setInterval(function () {

        //     for (var i = 0; i < 3; i++) {
        //         console.log(divs[i].classList[0]);

        //         if (divs[i].classList[0] == "active") {
        //             divs[i].classList.remove("active");
        //             divs[count].classList.remove("animated");
        //             divs[count].classList.remove("fadeIn");
        //             divs[i].classList.add("hide");

        //             if (i == 2) {
        //                 count = 0;
        //             } else {
        //                 count = i + 1;
        //             }

        //             divs[count].classList.add("active");
        //             divs[count].classList.add("animated");
        //             divs[count].classList.add("fadeIn");

        //             divs[count].classList.remove("hide");
        //             break;
        //         }
        //     }

        // }, 2000);









    }//homeController
})();