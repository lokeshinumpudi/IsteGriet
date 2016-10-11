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
                "iseventspage": "@iseventspage",
                "ismelapage":"@ismelapage"
            }
        };

        return directive;

        function link(scope, element, attrs) {
            // scope.eventDetail:has the all the event 
            var data = scope.dataSrc;

            
            function renderText(data){
                // console.log(data);
                 //A little check to see if data is actually populated or not [atleast description,short_description]
            if (data.description == "" || data.description == null || data.description == undefined) {
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
                console.log();
                angular.element(element[0].querySelector(".description"))[0].innerHTML = data.short_description;
                return;
            }
            // now its considered event Detail page
            document.getElementsByClassName("description")[0].innerHTML = data.description;
            data.description_para1 ? document.getElementsByClassName("description_para1")[0].innerHTML = data.description_para1 : "";
            data.description_para2 ? document.getElementsByClassName("description_para2")[0].innerHTML = data.description_para2 : "";
            data.description_para3 ? document.getElementsByClassName("description_para3")[0].innerHTML = data.description_para3 : "";


            };//renderText
           
            renderText(data);
            //Useful to update the short description during search made by the user

            // watch for changes made through parent controller[Dont in mela page!]
            if(attrs.ismelapage == "true"){
                return;
            }
            scope.$watch("dataSrc", function (newVal, oldVal) {
                if (!newVal) {
                    return;
                };
                // update the directive with newData received through controllers scope
                renderText(newVal);

                // console.log(newVal);
            });


        } //link function
    } //renderDescription

})(); //iife