(function () {
    'use strict';

    angular
        .module('ISTE')
        .directive('renderDescription', renderDescription);

    renderDescription.$inject = [];

    function renderDescription() {

        var directive = {
            templateUrl: "partials/eventDescriptionPartial.html",
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

            //A little check to see if data is actually populated or not [atleast description,short_description]
            if(data.description == "" || data.description == null || data.description == undefined){
                // location.reload();

                // omg do something here!
            }

            // by default all events are considered to be in full description mode
            scope.dataSrc.iseventspage = false;

            // this to bind attrs value to scope.dataSrc 
            //allows to control templating rendering
            if (attrs.iseventspage) {
                if (attrs.iseventspage == "true") {
                    scope.dataSrc.iseventspage = true;
                }
            }

            // if its all events page render short description only
            if (attrs.iseventspage != "false") {
                angular.element(element[0].querySelector(".description"))[0].innerHTML = data.short_description;
                return;
            }
            // now its considered event Detail page
            document.getElementsByClassName("description")[0].innerHTML = data.description;
            data.description_para1 ? document.getElementsByClassName("description_para1")[0].innerHTML = data.description_para1 : "";
            data.description_para2 ? document.getElementsByClassName("description_para2")[0].innerHTML = data.description_para2 : "";
            data.description_para3 ? document.getElementsByClassName("description_para3")[0].innerHTML = data.description_para3 : "";
        } //link function
    } //renderDescription

})(); //iife