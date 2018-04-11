

( function($) {
	'use strict';
	
	// Showcase video of my latest project
	var vimeoUrl = $('.playbutton').attr('data-video');
	
	var $video = $('<video>').attr('src', vimeoUrl);
	var video = $video[0];
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	var loaded = false;
	
	
	$('.playbutton').on('click', function(e){
		e.preventDefault();
		
		var $button = $(this);
		var $holder = $(this).parent();
		var state = $button.hasClass('paused') ? 'paused' 	:
			$button.hasClass('playing') ? 'playing' :
				'loading';
		
		if( state == 'loading'){
			$holder.prepend($video);
			
			if( isMobile ){
				video.play();
				$button.addClass('playing');
				return;
			}
			
			$button.addClass('loading');
			
			if( loaded ){
				$button.addClass('playing');
				video.play();
			}
			
			video.load();
			
			$video.on('canplay', function(){
				loaded = true;
				$button.addClass('playing');
				$button.removeClass('loading');
				video.play();
			});
			
			$video.on('ended', function(){
				$button.removeClass('playing');
			});
			
			return;
		}
		
		if( state === 'playing' ){
			video.pause();
			$button.addClass('paused');
			
			return;
		}
		
		if( state === 'paused' ){
			video.play();
			$button.removeClass('paused');
			
			return;
		}
		
	});
	
	
	
	
	
})( jQuery );
function initMap() {
	
	// Create a new StyledMapType object, passing it an array of styles,
	// and the name to be displayed on the map type control.
	var styledMapType = new google.maps.StyledMapType(
		[
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
		],
		{name: 'Styled Map'});
	
	// Create a map object, and include the MapTypeId to add
	// to the map type control.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 55.647, lng: 37.581},
		zoom: 11,
		mapTypeControlOptions: {
			mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
				'styled_map']
		}
	});
	
	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
}
$(document).ready(function(){
	
	
//	if(window.screen.width>=770) {
		$('.series-item').matchHeight({ property: 'min-height' });
		el = '';
		
//	}
	
	//scroll to top and bottom
	$('a[href="#moveToTop"]').click(function() {
		$("html, body").animate({ scrollTop: 0 }, 800 );
		return false;
	});
	
	
	// Offcanvas menu elem hide
	$('.main-toggle').click(function() {
		$('.share-toggle').toggleClass('hide');
		$('.navbar-brand').toggleClass('hide');
		$('.call-toggle').toggleClass('hide');
	});
	
	
	$('.nav-filter li').click(function(){
		$(this).toggleClass('active');
	});
	
	$('.filter-btn').click(function(){
		$(this).toggleClass('active');
	});
	
	
	
	
});
