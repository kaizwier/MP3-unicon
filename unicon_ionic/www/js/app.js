// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers']).run(function($ionicPlatform) {

	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});

})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url: "/app",
		abstract: true,
		templateUrl: "http://kaz.kochab.uberspace.de/MP3-unicon/unicon_ionic/www/templates/menu.html",
		controller: 'AppCtrl'
	})

	.state('app.profil', {
		url: "/app",
		abstract: true,
		templateUrl: "http://kaz.kochab.uberspace.de/MP3-unicon/unicon_ionic/www/templates/profil.html",
		controller: 'AppCtrl'
	})

	.state('app.browse', {
		url: "/browse",
		views: {
			'menuContent': {
				templateUrl: "http://kaz.kochab.uberspace.de/MP3-unicon/unicon_ionic/www/templates/browse.html",
				controller: 'BrowseCtrl'
			}
		}
	})

	.state('app.detail', {
		url: "/browse/:jamId",
		views: {
			'menuContent': {
				templateUrl: "http://kaz.kochab.uberspace.de/MP3-unicon/unicon_ionic/www/templates/detail.html",
				controller: 'JamdetailCtrl'
			}
		}
	})

	.state('app.create', {
		url: "/create",
		views: {
			'menuContent': {
			  templateUrl: "http://kaz.kochab.uberspace.de/MP3-unicon/unicon_ionic/www/templates/create.html",
			  controller: 'CreateCtrl'
			}
		}
	});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/browse');
})

.directive('onFinishRender',['$timeout', function ($timeout) {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			if (scope.$last === true) {
				scope.$evalAsync(attr.onFinishRender);
			}
		}
	};
}])

.factory( 'Auth', function($http, $ionicModal, $rootScope) {

	$http.get('http://kaz.kochab.uberspace.de/MP3/api/user/getdata')
	.then(function(result) {

		if(typeof result.data == 'string' && result.data == ''){
			localStorage.removeItem('userData');
			console.log('AUTH: userdaten werden aus localstorage gelöscht');
		} else {
			localStorage.setItem('userData',JSON.stringify(result.data));
    		$rootScope.currentUser = result.data; 
			console.log('AUTH: userdaten werden in den localstorage geschrieben');
		}

		console.log($rootScope.currentUser);
	});

  return {
    check: function() {
    	
 	},
    login: function(username, password) {
    	console.log('looooogin');
    	var form_data= [{"name":"username","value":username},{"name":"password","value":password},{"name":"returnUrl","value":"/MP3/"},{"name":"service","value":"login"}];
    	$.ajax({
			type: "POST",
			dataType: "html",
            cache: false,
			url: '/MP3/api/user/ajaxlogin/',
			data: form_data,
			success: function(data){
				if(typeof data == 'string' && data == ''){
					localStorage.removeItem('userData');
					console.log('userdaten werden aus localstorage gelöscht');
				} else {
					localStorage.setItem('userData',JSON.stringify(result.data));
		    		$rootScope.$apply(function(){
		    			$rootScope.currentUser = result.data; 
		    		});
				}
			}
		});
		
    },
    logout: function() {
    	$http.get('http://kaz.kochab.uberspace.de/MP3/api/user/ajaxlogin?service=logout')
		.then(function(result) {
			console.log(result);
		});
    },
    isLoggedIn: function() { 
    	if(typeof currentUser == 'undefined') { 
    		return false 
    	} else { 
    		true 
    	}

	},
    setGeo: function(data) { 
    	console.log('---- setting geodata');
    	console.log(data);
    	console.log($rootScope.currentUser);
    	console.log('//-- setting geodata');
    	$rootScope.currentUser.lat = data[0];
    	$rootScope.currentUser.lng = data[1];
    	localStorage.setItem('userData',JSON.stringify($rootScope.currentUser));
    },
    recheck: function() {
    	currentUser = JSON.parse(localStorage.getItem('userData'));
 	},
    currentUser: function() { return $rootScope.currentUser; },
    currentUserData: function(element) { return $rootScope.currentUser[element]; }
  };
});

/*function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var radlon1 = Math.PI * lon1/180
	var radlon2 = Math.PI * lon2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	dist = dist * 1.609344;
	return dist
}*/