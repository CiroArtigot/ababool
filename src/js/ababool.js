
		var app = angular.module('ababool', ['ngAnimate']); // Declaramos un modulo y el nombre de la aplicación "tienda"

		app.controller('ababoolCtrl', function ($scope, $timeout, $http, $compile) {

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

			$scope.removeAnimate = function(id){
				var page = document.getElementById(id);
				var pageelements = page.getElementsByClassName("animated");
				for(var i = 0; i < pageelements.length; i++) {
					var item = pageelements.item(i);
					var animation = item.getAttribute("data-animation")	;
					if(item.classList.contains(animation)) {
						item.classList.remove(animation);
						item.classList.remove('visible');
					}
				}
				return true;
			};

			$scope.checkAnimate = function(id){
				var page = document.getElementById(id);
				var pageelements = page.getElementsByClassName("animated");
				for(var i = 0; i < pageelements.length; i++) {
					var item = pageelements.item(i);
					var rect = item.getBoundingClientRect();
					var diff = rect.top - page.offsetHeight;
					var animation = item.getAttribute("data-animation")	;

					if(diff < 0) {
						if(!item.classList.contains(animation)) {
							item.classList.add(animation);
							item.classList.add('visible');
						}
					} else {
						if(item.classList.contains(animation)) {
							item.classList.remove(animation);
							item.classList.remove('visible');
						}
					}
				}
				return true;
			};

			$scope.checkModals = function(automode){
				var pageelements = document.getElementsByClassName("md-modal");
				for(var i = 0; i < pageelements.length; i++) {
					var item = pageelements.item(i);
					var load = item.getAttribute("data-auto")	;
					var id = item.getAttribute("data-id")	;
					var pageid = item.getAttribute("data-page");
					var loadsw = 1;
					if(pageid && (pageid != $scope.current)) loadsw = 0;
					if(load==automode && loadsw) $scope.openModal(id, false);
				}
				return true;
			};

			$scope.scrolling = function(id){
				var page = document.getElementById(id);
				angular.element(page).bind("scroll", function() {
					$scope.checkAnimate(id);
					var pageh = page.scrollHeight - (page.scrollTop + page.offsetHeight)  ;
					if(pageh <= 60) {

						console.log('aqui:' + pageh);

						$scope.checkModals(3);
					}
				});
				return true;
			};

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
			//	$scope.checkAnimate($scope.current);
				$scope.scrolling($scope.current);
			});

			$timeout(function() {
				$scope.preloader = true;
				$timeout(function() {
					$scope.checkAnimate($scope.current);
					$scope.checkModals(1);
					$scope.checkModals(2);
				}, 300);
			}, 1000);

			$scope.ineffect = '';
			$scope.outeffect = '';
			$scope.animationout = '';
			$scope.animationin = '';
			$scope.main = angular.element(document.querySelector( '#pt-main' ));
			$scope.backpage = '';

			$timeout(function() {
						//$scope.checkAnimate($scope.current);
			}, 2000);

			$scope.screenfull = function() {
				if (screenfull.enabled) {
					if(screenfull.isFullscreen) screenfull.exit();
	        else screenfull.request();
				}
			};

			$scope.createCookie = function(name, value, days) {
			    if (days) {
			        var date = new Date();
			        date.setTime(date.getTime()+(days*24*60*60*1000));
			        var expires = "; expires="+date.toGMTString();
			    }
			    else var expires = "";
			    document.cookie = name + "=" + value + expires + "; path=/";
					return true;
			};

			$scope.readCookie = function(name) {
			    var nameEQ = name + "=";
			    var ca = document.cookie.split(';');
			    for(var i=0;i < ca.length;i++) {
			        var c = ca[i];
			        while (c.charAt(0)==' ') c = c.substring(1,c.length);
			        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			    }
			    return null;
			};

			$scope.openModal = function(id, overlay) {

				var modal = document.getElementById('modal-' + id);
				var animation = modal.getAttribute("data-animation")	;
				var animationoff = modal.getAttribute("data-animation-off")	;
				var mode = modal.getAttribute("data-mode");

				if(mode==2) { // only open the modal one time each sesion
					var cookie = $scope.readCookie('modal' + id);
					if(cookie=='Ababool') return true;
					$scope.createCookie('modal' + id,'Ababool', 0);
				}

				if(mode==3) { // only open the modal one time by cookie
					var cookie = $scope.readCookie('modal' + id);
					if(cookie=='Ababool') return true;
					$scope.createCookie('modal' + id,'Ababool', 900);
				}

				if(overlay) $scope.openOverlay(id);

				modal.classList.remove(animationoff);
				modal.classList.add(animation);
				modal.classList.add('visible');
				return true;
			};

			$scope.closeModal = function(id, overlay) {
				if(overlay) $scope.closeOverlay(id);
				var modal = document.getElementById('modal-' + id);
				var animation = modal.getAttribute("data-animation")	;
				var animationoff = modal.getAttribute("data-animation-off")	;
				var mode = modal.getAttribute("data-mode");
				modal.classList.remove(animation);
				modal.classList.add(animationoff);
				$timeout(function() {
					if(mode==4) {
						modal.classList.add('hidden');
						modal.classList.remove('animated');
					}
					modal.classList.remove('visible');
				}, 600);
				return true;
			};

			$scope.openOverlay = function(id) {
				var overlay = document.getElementById('overlay-' + id);
				var animation = overlay.getAttribute("data-animation")	;
				var animationoff = overlay.getAttribute("data-animation-off")	;
				overlay.classList.remove(animationoff);
				overlay.classList.add(animation);
				overlay.classList.add('visible');
				return true;
			};

			$scope.closeOverlay = function(id) {
				var overlay = document.getElementById('overlay-' + id);
				var animation = overlay.getAttribute("data-animation")	;
				var animationoff = overlay.getAttribute("data-animation-off")	;
				overlay.classList.remove(animation);
				overlay.classList.add(animationoff);
				$timeout(function() {
					overlay.classList.remove('visible');
				}, 600);
				return true;
			};

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

				$scope.removeAnimate($scope.current);
				$scope.animationout = $scope.current;
				$scope.animationin = id;
				$scope.backpage = $scope.current;
				$scope.current = id;
				$scope.thenavigator(id); //change to watch current?
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

				$scope.checkAnimate(id);
				$scope.checkModals(2);
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
