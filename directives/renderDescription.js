(function () {
    'use strict';

    angular
        .module('ISTE')
        .directive('renderDescription', renderDescription);

    renderDescription.$inject = [];
    function renderDescription() {
        // Usage:     //     // Creates:
        var directive = {
            templateUrl: "partials/eventDescriptionPartial.html",
            // replace: true,
            // bindToController: true,
            // controller:"eventDetailCtrl as $eventDetail",
            link: link,
            scope: {
                "dataSrc": "=sourcedata",
                "iseventspage": "@iseventspage"
            }
        };
        return directive;

        function link(scope, element, attrs) {
            // scope.eventDetail:has the all the event details
            var data = scope.dataSrc;
            // hook the isevents to isolate scope
            scope.dataSrc.iseventspage = false;
            // this to bind attrs value to scope.dataSrc 
            //allows to control templating rendering
            if (attrs.iseventspage) {
                if (attrs.iseventspage == "true") {
                    scope.dataSrc.iseventspage = true;
                }
            }

            // if its a events page render short description only
            if (attrs.iseventspage != "false") {
                //select the element with description and add data to it
                // console.log(data.short_description);
                angular.element(element[0].querySelector(".description"))[0].innerHTML = data.short_description;
                // console.log(angular.element(element[0].querySelector(".description"))[0]);
                return;
            }
            document.getElementsByClassName("description")[0].innerHTML = data.description;
            data.description_para1 ? document.getElementsByClassName("description_para1")[0].innerHTML = data.description_para1 : "";
            data.description_para2 ? document.getElementsByClassName("description_para2")[0].innerHTML = data.description_para2 : "";
            data.description_para3 ? document.getElementsByClassName("description_para3")[0].innerHTML = data.description_para3 : "";
        }//link function
    }
    /* @ngInject */
    // function ControllerController () {

    // }
})();