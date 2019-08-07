;
(function () {
	"use strict";
	let headerSlider = $('.ba-intro');
	headerSlider.slick({
		slide: '.ba-slide',
		dots: true,
		arrows: false,
		fade: true
	});

	let newsSlider = $('.ba-news-slider');
	newsSlider.slick({
		slide: '.ba-news-slide',
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		nextArrow: newsSlider.find('[data-next]'),
		prevArrow: newsSlider.find('[data-prev]'),
		autoplay: true,
		autoplaySpeed: 4000,
	});

	function initMap() {
		//Create map and asign to this baMap var
		let mapCenter = {
			lat: 40.666803,
			lng: -73.87834
		}
		let baMap = new google.maps.Map(document.getElementById('ba-map'), {
			center: mapCenter,
			zoom: 12,
			disableDefaultUI: true,
			styles: [
				{
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#f5f5f5"
					}
				  ]
				},
				{
				  "elementType": "labels.icon",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#616161"
					}
				  ]
				},
				{
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#f5f5f5"
					}
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#bdbdbd"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#eeeeee"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#757575"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#e5e5e5"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#ffffff"
					}
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#757575"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#dadada"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#616161"
					}
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#e5e5e5"
					}
				  ]
				},
				{
				  "featureType": "transit.station",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#eeeeee"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#c9c9c9"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				}
			  ]			  

		});

		let marker = new google.maps.Marker({
			position: {
				lat: 40.6900417,
				lng: -73.9086652
			},
			map: baMap,
			icon: 'img/pin.png'
		});

	}

	$(document).ready(function (e) {
		initMap();

		$("a.ba-scrollto").click(function() {
			let elementClick = $(this).attr("href")
			let destination = $(elementClick).offset().top;
			jQuery("html:not(:animated),body:not(:animated)").animate({
			  scrollTop: destination
			}, 800);
			return false;
		  });
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() > 500) {
			$('.ba-header').addClass('ba-scroll');
		}
		else {
			$('.ba-header').removeClass('ba-scroll');
		}
	});  

})();