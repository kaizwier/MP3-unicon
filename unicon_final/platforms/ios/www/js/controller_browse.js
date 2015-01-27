'use strict';
var app = angular.module('unicon', ['geolocation']);

app.controller('BrowseCtrl', function($scope, $http, geolocation) {
	$scope.genres = [
		{ 
			title: 'Rock', 
			id: 1, 
			image: 'reggae.jpg',
			jams: [
				{
					divider: 'die naechsten 15 min',
					list: [
						{"id":"12","name":"Uni JAM","description":"Das ist die BEschreibung des Tests","lat":"49.9027","lng":"8.85866","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-23 15:10:00","created":"2015-01-21 10:25:29"},
						{"id":"22","name":"Der aller letzte Jam","description":"Das ist die BEschreibung des Tests","lat":"49.9027","lng":"8.85866","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-23 15:10:00","created":"2015-01-21 10:25:29"},
						{"id":"5","name":"Ruven's Jam","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 21:40:54"},
						{"id":"4","name":"mein jamname","description":"Ai gude das ist die beschreibung des jams","lat":"49.8704","lng":"8.62459","genre_id":"1","max_distance":"100","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 21:37:20"}
					]
				},{
					divider: 'die naechste Stunde',
					list: [
						{"id":"6","name":"N\u00e4chster Jam","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 21:41:15"},
						{"id":"7","name":"N\u00e4chster Jam","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 22:09:36"},
						{"id":"8","name":"Noch ein neuer Jam","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 22:10:47"},
						{"id":"9","name":"Ein weiterer Jam","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 22:11:17"},
						{"id":"10","name":"Ein weiterer Jam 1","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 22:11:33"},
					]
				},{
					divider: 'die naechsten Tage',
					list: [
						{"id":"11","name":"Ein weiterer Jam 2","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 22:12:53"},
						{"id":"14","name":"Lorem ipsum","description":"Ai gude das ist die beschreibung des jams","lat":"49.8704","lng":"8.62459","genre_id":"1","max_distance":"100","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 21:37:20"},
						{"id":"15","name":"Dolor sit amet","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 21:40:54"},
						{"id":"16","name":"Banaler Jam","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 21:41:15"},
						{"id":"17","name":"Interactive Music","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 22:09:36"},
						{"id":"18","name":"GEO JAM","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 22:10:47"},
						{"id":"19","name":"Wir Rocken","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 22:11:17"},
						{"id":"20","name":"Voll Abrocken","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 22:11:33"},
						{"id":"21","name":"Gas geben","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 22:12:53"}
					]
				}
			]
		},
		{ 
			title: 'Deep House',
			id: 2, 
			image: 'house.jpg',
			jams: [
				{
					divider: 'die naechsten 30 min',
					list: [
						{"id":"12","name":"Uni JAM","description":"Das ist die BEschreibung des Tests","lat":"49.9027","lng":"8.85866","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-23 15:10:00","created":"2015-01-21 10:25:29"},
						{"id":"22","name":"Der aller letzte Jam","description":"Das ist die BEschreibung des Tests","lat":"49.9027","lng":"8.85866","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-23 15:10:00","created":"2015-01-21 10:25:29"},
						{"id":"5","name":"Ruven's Jam","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 21:40:54"}				
					]
				},{
					divider: 'die naechsten Tage',
					list: [
						{"id":"11","name":"Ein weiterer Jam 2","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 22:12:53"},
						{"id":"14","name":"Lorem ipsum","description":"Ai gude das ist die beschreibung des jams","lat":"49.8704","lng":"8.62459","genre_id":"1","max_distance":"100","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 21:37:20"},
						{"id":"15","name":"Dolor sit amet","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 21:40:54"},
						{"id":"16","name":"Banaler Jam","description":"test","lat":"49.8704","lng":"8.62465","genre_id":"1","max_distance":"45","duration":"0","max_user":"4","startDate":"2015-01-24 10:40:48","created":"2015-01-20 21:41:15"}
					]
				}
			]
		}
	];



	$scope.slideHasChanged = function($index){
		console.log($index);
		
	};

});