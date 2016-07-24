<html ng-app="ISTE">


<head>

    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" type="" href="libsmin/semantic.min.css">
    <link rel="" type="" href="">

    <style>
        /*fonts*/
        
        @font-face {
            font-family: 'icomoon';
            src: url('fonts/icomoon.eot?y2cx5o');
            src: url('fonts/icomoon.eot?y2cx5o#iefix') format('embedded-opentype'), url('fonts/icomoon.ttf?y2cx5o') format('truetype'), url('fonts/icomoon.woff?y2cx5o') format('woff'), url('fonts/icomoon.svg?y2cx5o#icomoon') format('svg');
            font-weight: normal;
            font-style: normal;
        }
        
        .icon-facebook {
            /*use !important to prevent issues with browser extensions that change fonts */
            font-family: 'icomoon' !important;
            speak: none;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            Better Font Rendering===========-webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        .icon-facebook-official:before {
            content: "\e900";
        }
        /*fonts end*/
        
        .center {
            text-align: center;
        }
        
        .ui.text.menu .active.item:hover {
            background-color: none !important;
        }
        
        .ui.text.menu .active.item {
            background-color: red !important;
        }
        
        .width-control {
            padding: 0 20%;
        }
        
        .width-control-more-events {
            padding: 0 20%;
            top: 35px;
            position: relative;
        }
        /*upto tabs*/
        
        @media screen and (max-width: 900px) {
            .width-control {
                padding: 0 15%;
            }
            .hide-mobile {
                display: none !important;
            }
            .homeImage {
                height: 290px !important;
                left: -20px !important;
                width: 110% !important;
                background-size: contain !important;
                background-repeat: no-repeat;
                top: -14px;
            }
            .home-events {
                top: -82px;
            }
            .ui.horizontal.segments {
                background-color: rgba(255, 255, 255, 0.3) !important;
            }
            .ui.segments>.segment {
                max-width: 50% !important;
                left: 0px !important;
            }
            .width-control-more-events {
                padding: 0 1% !important;
                top: 35px;
                position: relative;
            }
        }
        /*ultra small devices*/
        /*@media only screen and(min-width:300px) {
            .home-events {
                top: -400px;
                display none;
            }
        }*/
        /*ultra small*/
        /*small mobile devices*/
        
        @media screen and (max-width: 418px) {
            .width-control {
                padding: 0 4%;
            }
            .move-25-right {
                left: 11% !important;
                padding-top: 50px;
                /*position: relative;*/
            }
            /*home styles*/
            .homeImage {
                height: 220px !important;
                left: -14px !important;
                width: 110% !important;
                background-size: contain !important;
                background-repeat: no-repeat;
                top: -14px;
            }
            .home-events {
                top: -82px;
            }
            .ui.horizontal.segments {
                background-color: rgba(255, 255, 255, 0.3) !important;
            }
            .ui.segments>.segment {
                max-width: 50% !important;
                left: 0px !important;
            }
            /*home styles*/
            /*events page*/
            .hide-mobile {
                display: none !important;
            }
            .more-events-header {
                top: 10px;
                position: relative
            }
            .width-control-more-events {
                top: 15px;
                padding: 1% 2%;
            }
            .events-banner-left p {
                padding: 13px;
            }
            .events-banner-left a {
                padding: 13px;
                min-height: 50px;
            }
            /*events page*/
            /*event Detail start*/
            .gallery-eventDetail {
                /*position:relative;
                margin-left:6%;*/
            }
            .gallery-eventDetail img {
                width: 100% !important;
            }
            /*make the banner image in mobile devices reduce the height */
            .events-banner-right {
                height: 260px !important;
                background-size: contain !important;
                background-repeat: no-repeat !important;
            }
            /*event detail end*/
            /*team page*/
            .each-person img {
                height: auto !important;
            }
            .btn-center {
                left: 26% !important;
                margin: 0 auto;
            }
            .each-person>small {
                display: inline-block !important;
            }
            /*team page end*/
        }
        /*mobile styles end*/
        /*home*/
        
        .homeImage {
            background-image: url(./images/1.jpg);
            height: 660px;
            margin: 0 auto;
            left: 0;
            background-size: cover;
            position: relative;
            top: -14px;
            /* left: -92px; */
            background-attachment: fixed;
            /*ovverrides the segment styles*/
        }
        
        .home-events {
            position: relative;
            /*top: -205px;*/
        }
        
        .home-events .header {
            /*color: white !important;*/
            text-align: center;
        }
        
        .home-events .segment {
            border-left: none !important;
            max-width: 30%;
            margin-left: 20%;
        }
        /*ovverrite segments container backgorund color*/
        
        .ui.segments>.segment {
            max-width: 30%;
            left: 19%;
        }
        
        .ui.horizontal.segments {
            /*background-color: rgba(0, 0, 0, 0.1) !important;*/
            border: none;
        }
        
        .ui.attached.segment {
            border: none !important;
        }
        
        .ui.inverted.attached.segment {
            border-color: none !important;
        }
        /*home end*/
        
        .banner {}
        
        .events-banner-left {
            /*height: 32%;*/
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            vertical-align: top;
            background-size: cover;
            background-position: center center;
            background-color: rgba(255, 255, 255, 0.8);
            background-blend-mode: lighten;
        }
        
        .events-banner-left h2 {
            text-align: center;
            position: relative;
            top: 12px;
        }
        
        .events-banner-left p {}
        
        .events-banner-left button {
            position: relative;
            bottom: 0px
        }
        
        .events-banner-right {
            height: 400px;
            /*background-image: url(images/1.jpg);*/
        }
        
        .ui[class*="right fixed"].menu {
            top: 15% !important;
        }
        
        .ui.item.each-event {
            border-bottom: 1px solid grey;
            padding-bottom: 12px;
        }
        
        .ui.search .prompt,
        .ui.input {
            width: 100% !important;
        }
        /*events end*/
        /*Detail view*/
        
        .content-description {
            padding: 6%;
        }
        
        .notification {
            padding: 4%;
        }
        /*team*/
        
        .btn-center {
            position: relative;
            left: 44%;
        }
        
        .ui.basic.blue.active.button,
        .ui.basic.blue.buttons .active.button {
            background: 0 0!important;
            box-shadow: 0 0 0 1px #1279c6 inset!important;
            color: white !important;
            background-color: #2185d0!important;
        }
        
        .width-control-team-members {
            padding: 0 2%;
        }
        
        .ui.six.cards>.card {
            width: calc(13.666667% - 1.5em) !important;
        }
        
        .each-person>small {
            display: block;
        }
        
        .team-members {
            position: relative;
            top: 45px;
        }
        
        .team-members i {
            position: relative;
            left: 10px;
        }
        
        .each-person img {
            width: 100%;
            height: 27%;
        }
        /*team end*/
        /*contact*/
        
        .move-25-right {
            left: 25%;
            position: relative;
        }
        
        strong {
            text-transform: uppercase;
            font-size: 1.1em;
            background-image: linear-gradient(to right, #F3FFBD 50%, #FF1654 50%);
            color: #FF1654;
            /* background-color:#F3FFBD;*/
            background-size: 200%;
            background-position: 0;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        
        strong:hover {
            background-position: -100%;
            cursor: pointer;
            color: #F3FFBD;
        }
    </style>

</head>


<body ng-controller="bodyCtrl as bodyvm">
    <!--menu bar-->
    <!--top menu start-->

    <div class="ui fluid container  ">

        <div class="ui secondary  menu">
            <a href="#/">
                <li class="item" ng-class="{'active':bodyvm.activetab == 'home'}">Home</li>
            </a>

            <a href="#/events">
                <li class="item" ng-class="{'active':bodyvm.activetab =='events'}">Events</li>
            </a>
            <a href="#/mela">
                <li class="item" ng-class="{'active':bodyvm.activetab =='mela'}">Mela</li>
            </a>

            <a href="#/team">
                <li class="item" ng-class="{'active':bodyvm.activetab =='team'}">Team</li>
            </a>
            <a href="#/about">
                <li class="item" ng-class="{'active':bodyvm.activetab =='about'}">About</li>
            </a>
            <a href="#/contact">
            <li class="item" ng-class="{'active':bodyvm.activetab =='contactUs'}">Contact Us</li>
        </a>

            <!--<div class="right menu">
            <div class="item">
                <div class="ui icon input">
                    <input type="text" placeholder="Search Events">
                    <i class="search link icon"></i>
                </div>
            </div>
         
        </div>-->

        </div>
    </div>


    <!--top menu end-->

    <div class="ui fluid container">
        <ng-view></ng-view>
    </div>




    <div class="ui inverted vertical footer segment" style="    position: relative;
    top: 20%;">
        <div class="ui center aligned container">
            <div class="ui stackable inverted divided grid">
                <div class="three wide column">
                    <h4 class="ui inverted header">Group 1</h4>
                    <div class="ui inverted link list">
                        <a href="#" class="item">Link One</a>

                    </div>
                </div>
                <div class="three wide column">
                    <h4 class="ui inverted header">Group 2</h4>
                    <div class="ui inverted link list">
                        <a href="#" class="item">Link One</a>

                    </div>
                </div>
                <div class="three wide column">
                    <h4 class="ui inverted header">Group 3</h4>
                    <div class="ui inverted link list">
                        <a href="#" class="item">Link One</a>

                    </div>
                </div>
                <div class="seven wide column">
                    <h4 class="ui inverted header">Footer Header</h4>
                    <p>Awesomeness babe.</p>
                </div>
            </div>
            <div class="ui inverted section divider"></div>
            <img src="assets/images/logo.png" class="ui centered mini image">
            <div class="ui horizontal inverted small divided link list">
                <a class="item" href="#">GRIET</a>
                <a class="item" href="#">Contact Us</a>
                <a class="item" href="#">Terms and Conditions</a>
                <a class="item" href="#">Privacy Policy</a>
            </div>
        </div>
    </div>


    <script src="libsmin/angular/angular.min.js"></script>
    <script src="libsmin/angular/angular-route.min.js"></script>


    <script src="app.js"></script>

    <!--services-->
    <script src="services/dataService.js"></script>

    <!--directives-->

    <script src="directives/renderDescription.js"></script>
    <!--controllers-->
    <script src="controllers/homeCtrl.js"></script>
    <script src="controllers/eventsCtrl.js"></script>
    <script src="controllers/eventDetailCtrl.js">
    </script>
    <script src="controllers/teamCtrl.js">
    </script>
    <script src="controllers/aboutCtrl.js">
    </script>
    <script src="controllers/melaCtrl.js"></script>
    <script src="controllers/contactCtrl.js"></script>
</body>

</html>