<!DOCTYPE html/>
<html lang="en" ng-app="ISTE">

<head>
	<!--<base href="/">-->
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta charset="utf-8">
	<title>ISTE GRIET</title>
	<link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192" href="icons/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png">
	<link rel="manifest" href="/manifest.json">
	<meta name="msapplication-TileColor" content="#8B1734">
	<meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png">
	<meta name="theme-color" content="#8B1734">
	<style type="text/css">

	</style>
	<!--Defer loading css-->
	<link rel="stylesheet" type="text/css" href="libsmin/semantic.min.css">
	<!--<link rel="stylesheet" type="text/css" href="app.min.css">-->
	<!--<link rel="preload" href="libsmin/semantic.min.css" as="style" onload="this.rel='stylesheet'">
	<noscript>
		<link rel="stylesheet" href="libsmin/semantic.min.css">
	</noscript>-->
	<link rel="preload" href="app.min.css" as="style" onload="this.rel='stylesheet'">
	<noscript>
		<link rel="stylesheet" href="app.min.css">
	</noscript>
	<!--Defer loading-->
</head>

<body ng-controller="bodyCtrl as bodyvm">
	<!--menu bar-->
	<!--top menu start-->
	<div class="ui fluid container main-menu">
		<div class="ui secondary  menu">
			<a href="#/">
				<li class="item home-tab" ng-class="{'active':bodyvm.activetab == 'home'}">
					<img class="" src="/images/logos/istewhite.png" alt="Home tab">
				</li>
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
				<li class="item" ng-class="{'active':bodyvm.activetab =='contactUs'}">Contact</li>
			</a>
			<!--<div class="right menu">
				<div class="item">
					<div class="ui icon input">
						<input type="text" placeholder="Search...">
						<i class="search link icon"></i>
					</div>
				</div>

			</div>-->
		</div>
	</div>
	<!--top menu end-->
	<!--All app renders in this div-->
	<div>
		<ng-view></ng-view>
	</div>
	<!--All our app renders in this div-->
	<div class="ui inverted vertical footer segment" style=" position: relative;
    top: 10%;">
		<div class="ui center aligned container">
			<div class="ui stackable inverted divided grid">
				<div class="two wide column">
					<h4 class="ui inverted header"><img class="ui image small" src="images/logos/istelogo.png" alt=""></h4>
					<div class="ui inverted link list">
						<!--<a href="" class="item">Link One</a>-->
					</div>
				</div>
				<div class="eight wide column">
					<h3 class="ui inverted header">Gokaraju Rangaraju Institute of Engineering and Technology</h3>
					<h5 class="ui inverted header">(Approved by AICTE, Autonomous under JNTUH, Hyderabad)</h5>
					<h5 class="ui inverted header">Bachupally, Kukatpally, Hyderabad-500090</h5>
					<div class="ui inverted link list">
					</div>
				</div>
				<div class="six wide column">
					<h4 class="ui inverted header">Social Media</h4>
					<!--social links-->
					<div class="ui horizontal inverted large divided massive link list">
						<a class="item" href="https://www.facebook.com/ISTEGRIETSB/"><i class="icon-facebook"></i></a>
						<a href="https://twitter.com/istegrietsb" class="item"><i class="icon-twitter"></i></a>
						<a href="mailto:istegrietsb@gmail.com" class="item"><i class="icon-mail"></i></a>
						<a href="https://www.instagram.com/istegrietsb/?hl=en" class="item"><i class="icon-instagram"></i></a>
						<a href="#/contact#contactnumber" class="item"><i class="icon-phone"></i> </a>
					</div>
					<!--Social links-->
				</div>
			</div>
			<div class="ui inverted section divider"></div>
			<a href="http://www.griet.ac.in/">
				<img src="images/logos/grietlogo.png" alt="Griet logo" class="ui centered mini image">
			</a>
			<div class="ui horizontal inverted small divided link list">
				<a class="item" href="http://www.griet.ac.in/">GRIET</a>
				<a class="item" href="#/contact">Contact Us</a>
				<a class="item" href="#">Terms and Conditions</a>
				<a class="item" href="#">Privacy Policy</a>
				<a class="item" href="#">All Rights Reserved </a>
			</div>
		</div>
	</div>
	<script type="text/javascript">
		/*! loadCSS: load a CSS file asynchronously. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT */
		(function (w) {
			"use strict";
			/* exported loadCSS */
			var loadCSS = function (href, before, media) {
				// Arguments explained:
				// `href` [REQUIRED] is the URL for your CSS file.
				// `before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before
				// By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.
				// `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'
				var doc = w.document;
				var ss = doc.createElement("link");
				var ref;
				if (before) {
					ref = before;
				} else {
					var refs = (doc.body || doc.getElementsByTagName("head")[0]).childNodes;
					ref = refs[refs.length - 1];
				}

				var sheets = doc.styleSheets;
				ss.rel = "stylesheet";
				ss.href = href;
				// temporarily set media to something inapplicable to ensure it'll fetch without blocking render
				ss.media = "only x";

				// wait until body is defined before injecting link. This ensures a non-blocking load in IE11.
				function ready(cb) {
					if (doc.body) {
						return cb();
					}
					setTimeout(function () {
						ready(cb);
					});
				}
				// Inject link
				// Note: the ternary preserves the existing behavior of "before" argument, but we could choose to change the argument to "after" in a later release and standardize on ref.nextSibling for all refs
				// Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
				ready(function () {
					ref.parentNode.insertBefore(ss, (before ? ref : ref.nextSibling));
				});
				// A method (exposed on return object for external use) that mimics onload by polling document.styleSheets until it includes the new sheet.
				var onloadcssdefined = function (cb) {
					var resolvedHref = ss.href;
					var i = sheets.length;
					while (i--) {
						if (sheets[i].href === resolvedHref) {
							return cb();
						}
					}
					setTimeout(function () {
						onloadcssdefined(cb);
					});
				};

				function loadCB() {
					if (ss.addEventListener) {
						ss.removeEventListener("load", loadCB);
					}
					ss.media = media || "all";
				}

				// once loaded, set link's media back to `all` so that the stylesheet applies once it loads
				if (ss.addEventListener) {
					ss.addEventListener("load", loadCB);
				}
				ss.onloadcssdefined = onloadcssdefined;
				onloadcssdefined(loadCB);
				return ss;
			};
			// commonjs
			if (typeof exports !== "undefined") {
				exports.loadCSS = loadCSS;
			} else {
				w.loadCSS = loadCSS;
			}
		}(typeof global !== "undefined" ? global : this));

		(function (w) {
			// rel=preload support test
			if (!w.loadCSS) {
				return;
			}
			var rp = loadCSS.relpreload = {};
			rp.support = function () {
				try {
					return w.document.createElement("link").relList.supports("preload");
				} catch (e) {
					return false;
				}
			};

			// loop preload links and fetch using loadCSS
			rp.poly = function () {
				var links = w.document.getElementsByTagName("link");
				for (var i = 0; i < links.length; i++) {
					var link = links[i];
					if (link.rel === "preload" && link.getAttribute("as") === "style") {
						w.loadCSS(link.href, link);
						link.rel = null;
					}
				}
			};

			// if link[rel=preload] is not supported, we must fetch the CSS manually using loadCSS
			if (!rp.support()) {
				rp.poly();
				var run = w.setInterval(rp.poly, 300);
				if (w.addEventListener) {
					w.addEventListener("load", function () {
						w.clearInterval(run);
					});
				}
				if (w.attachEvent) {
					w.attachEvent("onload", function () {
						w.clearInterval(run);
					})
				}
			}
		}(this));
	</script>
	<script type="text/javascript" src="libsmin/angular/angular.js"></script>
	<!--Use below in production-->
	<script  type="text/javascript" src="app.min.js"></script>
	<!---->
	<!--<script src="app.js"></script>
	<script src="templatesCache/templates.js"></script>
	<script src="services/dataService.js"></script>
	<script src="directives/renderDescription.js"></script>
	<script src="controllers/homeCtrl.js"></script>
	<script src="controllers/eventsCtrl.js"></script>
	<script src="controllers/eventDetailCtrl.js">
	</script>
	<script src="controllers/teamCtrl.js">
	</script>
	<script src="controllers/aboutCtrl.js">
	</script>
	<script src="controllers/melaCtrl.js"></script>
	<script src="controllers/contactCtrl.js"></script>-->
</body>

</html>