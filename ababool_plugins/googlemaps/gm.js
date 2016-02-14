// JavaScript Document

  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3';

  script.onload = function () {
    console.log('se cargo el fichero de google');
  };
  document.head.appendChild(script); //

	var map;

	function initialize() {

    console.log('initialize');

    if(map) return;

		var mapOptions = {
			zoom: 15,
			center: new google.maps.LatLng("41.70943","-0.99687"),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

    themap = document.getElementById('map-canvas');

		map = new google.maps.Map(themap , mapOptions);

    themap.style.width = '100%';
    themap.style.height = '100%';
    themap.style.position = 'absolute';
    themap.style.left = '0';
    themap.style.top = '0';
	}
