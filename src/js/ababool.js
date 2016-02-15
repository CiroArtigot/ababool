
		var app = angular.module('ababool', ['ngAnimate']); // Declaramos un modulo y el nombre de la aplicación "tienda"


		app.controller('ababoolCtrl', function ($scope, $timeout, $http, $compile) {

			/* preloader out */
			$timeout(function() {
						$scope.preloader = true;
			}, 1000);

			$scope.getTransition = function(animation) {

				switch(animation){
					case 1:$scope.outeffect="pt-moveToLeft";$scope.ineffect="pt-moveFromRight";break;
					case 2:$scope.outeffect="pt-moveToRight";$scope.ineffect="pt-moveFromLeft";break;
					case 3:$scope.outeffect="pt-moveToTop";$scope.ineffect="pt-moveFromBottom";break;
					case 4:$scope.outeffect="pt-moveToBottom";$scope.ineffect="pt-moveFromTop";break;
					case 5:$scope.outeffect="pt-fade";$scope.ineffect="pt-moveFromRight pt-ontop";break;
					case 6:$scope.outeffect="pt-fade";$scope.ineffect="pt-moveFromLeft pt-ontop";break;
					case 7:$scope.outeffect="pt-fade";$scope.ineffect="pt-moveFromBottom pt-ontop";break;
					case 8:$scope.outeffect="pt-fade";$scope.ineffect="pt-moveFromTop pt-ontop";break;
					case 9:$scope.outeffect="pt-moveToLeftFade";$scope.ineffect="pt-moveFromRightFade";break;
					case 10:$scope.outeffect="pt-moveToRightFade";$scope.ineffect="pt-moveFromLeftFade";break;
					case 11:$scope.outeffect="pt-moveToTopFade";$scope.ineffect="pt-moveFromBottomFade";break;
					case 12:$scope.outeffect="pt-moveToBottomFade";$scope.ineffect="pt-moveFromTopFade";break;
					case 13:$scope.outeffect="pt-moveToLeftEasing pt-ontop";$scope.ineffect="pt-moveFromRight";break;
					case 14:$scope.outeffect="pt-moveToRightEasing pt-ontop";$scope.ineffect="pt-moveFromLeft";break;
					case 15:$scope.outeffect="pt-moveToTopEasing pt-ontop";$scope.ineffect="pt-moveFromBottom";break;
					case 16:$scope.outeffect="pt-moveToBottomEasing pt-ontop";$scope.ineffect="pt-moveFromTop";break;
					case 17:$scope.outeffect="pt-scaleDown";$scope.ineffect="pt-moveFromRight pt-ontop";break;
					case 18:$scope.outeffect="pt-scaleDown";$scope.ineffect="pt-moveFromLeft pt-ontop";break;
					case 19:$scope.outeffect="pt-scaleDown";$scope.ineffect="pt-moveFromBottom pt-ontop";break;
					case 20:$scope.outeffect="pt-scaleDown";$scope.ineffect="pt-moveFromTop pt-ontop";break;
					case 21:$scope.outeffect="pt-scaleDown";$scope.ineffect="pt-scaleUpDown pt-delay300";break;
					case 22:$scope.outeffect="pt-scaleDownUp";$scope.ineffect="pt-scaleUp pt-delay300";break;
					case 23:$scope.outeffect="pt-moveToLeft pt-ontop";$scope.ineffect="pt-scaleUp";break;
					case 24:$scope.outeffect="pt-moveToRight pt-ontop";$scope.ineffect="pt-scaleUp";break;
					case 25:$scope.outeffect="pt-moveToTop pt-ontop";$scope.ineffect="pt-scaleUp";break;
					case 26:$scope.outeffect="pt-moveToBottom pt-ontop";$scope.ineffect="pt-scaleUp";break;
					case 27:$scope.outeffect="pt-scaleDownCenter";$scope.ineffect="pt-scaleUpCenter pt-delay400";break;
					case 28:$scope.outeffect="pt-rotateRightSideFirst";$scope.ineffect="pt-moveFromRight pt-delay200 pt-ontop";break;
					case 29:$scope.outeffect="pt-rotateLeftSideFirst";$scope.ineffect="pt-moveFromLeft pt-delay200 pt-ontop";break;
					case 30:$scope.outeffect="pt-rotateTopSideFirst";$scope.ineffect="pt-moveFromTop pt-delay200 pt-ontop";break;
					case 31:$scope.outeffect="pt-rotateBottomSideFirst";$scope.ineffect="pt-moveFromBottom pt-delay200 pt-ontop";break;
					case 32:$scope.outeffect="pt-flipOutRight";$scope.ineffect="pt-flipInLeft pt-delay500";break;
					case 33:$scope.outeffect="pt-flipOutLeft";$scope.ineffect="pt-flipInRight pt-delay500";break;
					case 34:$scope.outeffect="pt-flipOutTop";$scope.ineffect="pt-flipInBottom pt-delay500";break;
					case 35:$scope.outeffect="pt-flipOutBottom";$scope.ineffect="pt-flipInTop pt-delay500";break;
					case 36:$scope.outeffect="pt-rotateFall pt-ontop";$scope.ineffect="pt-scaleUp";break;
					case 37:$scope.outeffect="pt-rotateOutNewspaper";$scope.ineffect="pt-rotateInNewspaper pt-delay500";break;
					case 38:$scope.outeffect="pt-rotatePushLeft";$scope.ineffect="pt-moveFromRight";break;
					case 39:$scope.outeffect="pt-rotatePushRight";$scope.ineffect="pt-moveFromLeft";break;
					case 40:$scope.outeffect="pt-rotatePushTop";$scope.ineffect="pt-moveFromBottom";break;
					case 41:$scope.outeffect="pt-rotatePushBottom";$scope.ineffect="pt-moveFromTop";break;
					case 42:$scope.outeffect="pt-rotatePushLeft";$scope.ineffect="pt-rotatePullRight pt-delay180";break;
					case 43:$scope.outeffect="pt-rotatePushRight";$scope.ineffect="pt-rotatePullLeft pt-delay180";break;
					case 44:$scope.outeffect="pt-rotatePushTop";$scope.ineffect="pt-rotatePullBottom pt-delay180";break;
					case 45:$scope.outeffect="pt-rotatePushBottom";$scope.ineffect="pt-rotatePullTop pt-delay180";break;
					case 46:$scope.outeffect="pt-rotateFoldLeft";$scope.ineffect="pt-moveFromRightFade";break;
					case 47:$scope.outeffect="pt-rotateFoldRight";$scope.ineffect="pt-moveFromLeftFade";break;
					case 48:$scope.outeffect="pt-rotateFoldTop";$scope.ineffect="pt-moveFromBottomFade";break;
					case 49:$scope.outeffect="pt-rotateFoldBottom";$scope.ineffect="pt-moveFromTopFade";break;
					case 50:$scope.outeffect="pt-moveToRightFade";$scope.ineffect="pt-rotateUnfoldLeft";break;
					case 51:$scope.outeffect="pt-moveToLeftFade";$scope.ineffect="pt-rotateUnfoldRight";break;
					case 52:$scope.outeffect="pt-moveToBottomFade";$scope.ineffect="pt-rotateUnfoldTop";break;
					case 53:$scope.outeffect="pt-moveToTopFade";$scope.ineffect="pt-rotateUnfoldBottom";break;
					case 54:$scope.outeffect="pt-rotateRoomLeftOut pt-ontop";$scope.ineffect="pt-rotateRoomLeftIn";break;
					case 55:$scope.outeffect="pt-rotateRoomRightOut pt-ontop";$scope.ineffect="pt-rotateRoomRightIn";break;
					case 56:$scope.outeffect="pt-rotateRoomTopOut pt-ontop";$scope.ineffect="pt-rotateRoomTopIn";break;
					case 57:$scope.outeffect="pt-rotateRoomBottomOut pt-ontop";$scope.ineffect="pt-rotateRoomBottomIn";break;
					case 58:$scope.outeffect="pt-rotateCubeLeftOut pt-ontop";$scope.ineffect="pt-rotateCubeLeftIn";break;
					case 59:$scope.outeffect="pt-rotateCubeRightOut pt-ontop";$scope.ineffect="pt-rotateCubeRightIn";break;
					case 60:$scope.outeffect="pt-rotateCubeTopOut pt-ontop";$scope.ineffect="pt-rotateCubeTopIn";break;
					case 61:$scope.outeffect="pt-rotateCubeBottomOut pt-ontop";$scope.ineffect="pt-rotateCubeBottomIn";break;
					case 62:$scope.outeffect="pt-rotateCarouselLeftOut pt-ontop";$scope.ineffect="pt-rotateCarouselLeftIn";break;
					case 63:$scope.outeffect="pt-rotateCarouselRightOut pt-ontop";$scope.ineffect="pt-rotateCarouselRightIn";break;
					case 64:$scope.outeffect="pt-rotateCarouselTopOut pt-ontop";$scope.ineffect="pt-rotateCarouselTopIn";break;
					case 65:$scope.outeffect="pt-rotateCarouselBottomOut pt-ontop";$scope.ineffect="pt-rotateCarouselBottomIn";break;
					case 66:$scope.outeffect="pt-rotateSidesOut";$scope.ineffect="pt-rotateSidesIn pt-delay200";break;
					case 67:$scope.outeffect="pt-rotateSlideOut";$scope.ineffect="pt-rotateSlideIn";break;
			  }
				return true;
			}

			$scope.thenavigator = function(id) {

				$scope.left = '';
				$scope.right = '';
				$scope.down = '';
				$scope.up = '';

				var page = document.getElementById(id);

				if(page.hasAttribute("data-left")) $scope.left = page.attributes['data-left'].value;
				if(page.hasAttribute("data-right")) $scope.right = page.attributes['data-right'].value;
				if(page.hasAttribute("data-up")) $scope.up = page.attributes['data-up'].value;
				if(page.hasAttribute("data-down")) $scope.down = page.attributes['data-down'].value;

				if($scope.left) $scope.navleft = true;
				else $scope.navleft = false;

				if($scope.right) $scope.navright = true;
				else $scope.navright = false;

				if($scope.up) $scope.navup = true;
				else $scope.navup = false;

				if($scope.down) $scope.navdown = true;
				else $scope.navdown = false;

				if($scope.down || $scope.up || $scope.right || $scope.left) $scope.navigator = true;
				else $scope.navigator = false;

				return true;
			}

			$scope.$watch("current", function(){
				$scope.thenavigator($scope.current);
			});

			$scope.ineffect = '';
			$scope.outeffect = '';
			$scope.animationout = '';
			$scope.animationin = '';
			$scope.main = angular.element(document.querySelector( '#pt-main' ));
			$scope.backpage = '';

			$scope.screenfull = function() {
				if (screenfull.enabled) {
					if(screenfull.isFullscreen) screenfull.exit();
	        else screenfull.request();
				}
			}

			/* gotopage funtion */
			$scope.gotopage = function(id, animation) {

				if(id=='') return true;
				if(id== $scope.current) return true;
				if($scope.animationout!='' || $scope.animationin!='') return true;

				$scope.getTransition(animation);

				// look if the page is loaded
				var ispage = 0;
				var pages = document.getElementsByClassName("pt-page");

				for(var i = 0; i < pages.length; i++)
					if(id == pages.item(i).id) ispage = 1;

				//if the page isn't loaded then look for it by AJAX
				if(!ispage) {

					console.log('ajax');

					$scope.preloader = false;

					$http.post('/ajax/?id=' + id + '&token=' + $scope.token).
				    success(function(data, status, headers, config) {
								$timeout(function(){
							  var template = data;
								$scope.$apply(function() {
									$scope.preloader = true;
	                var content = $compile(template)($scope);
	                $scope.main.append(content);
								})
								$scope.gotopage(id);
        			},1000);
				    }).
				    error(function(data, status, headers, config) {
								console.log('error');
								return true;
				    });
						return true;
				}

				$scope.animationout = $scope.current;
				$scope.animationin = id;
				$scope.backpage = $scope.current;
				$scope.current = id;
				$scope.thenavigator(id);
				return true;
			}

			$scope.theclass = function(id) {
				var current = '';
				if(id == $scope.current) current = 'pt-current ';
				if(id == $scope.animationout) return 'pt-current ' + $scope.outeffect
				if(id == $scope.animationin) return 'pt-current ' + $scope.ineffect
				return current;
			}

			$scope.doOnEndPage = function(id) {
			//	console.log(id);
				$scope.animationin = '';
				if($scope.animationout) $scope.doOnEndOldPage($scope.animationout);
				$scope.animationout = '';

				if(id=='map') initialize();

				$scope.$apply();
				var pahtlocation = '';
				var pahtlocationfull = pahtlocation +  id;
				ga('send', 'pageview', pahtlocationfull);

			//	console.log('pahtlocationfull: ' + pahtlocationfull);

				window.history.pushState({}, "Title", "/" + id);
				return true;
			}

			$scope.doOnEndOldPage = function(id) {
				if(id) {
					var ajax = 0;
					//console.log(id);
					var page = document.getElementById(id);
					if(page.hasAttribute("data-ajax")) ajax = page.attributes['data-ajax'].value;
					//console.log(ajax);
					if(ajax=='2') page.parentNode.removeChild(page);
				}
				return true;
			}

			$scope.endpage = function(id, event) {
				//if($scope.animationout == id ) $scope.doOnEndOldPage(id);
				if($scope.animationin == id ) $scope.doOnEndPage(id);
			}
		});

		app.directive('animationend', function() {
			return {
				restrict: 'A',
				scope: {
					animationend: '&'
				},
				link: function(scope, element) {
					var callback = scope.animationend(),
						  events = 'animationend webkitAnimationEnd MSAnimationEnd' +
								'transitionend webkitTransitionEnd';
					element.on(events, function(event) {
						callback.call(element[0], element[0].attributes['id'].value, event);
					});
				}
			};
		});
