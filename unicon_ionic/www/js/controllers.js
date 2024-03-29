angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
	$scope.loginData = {};
	$scope.userData = {};
	$scope.modalTemplate = 'http://kaz.kochab.uberspace.de/MP3-unicon/unicon_ionic/www/templates/login.html';
	$scope.modal = {};

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.login = function() {
		console.log(JSON.parse(localStorage.getItem('userData')));
		console.log(typeof JSON.parse(localStorage.getItem('userData')));

	  	if(JSON.parse(localStorage.getItem('userData')) != null){
	  		console.log('Template -> Profil | userdaten Abrufen');
	  		$scope.modalTemplate = 'http://kaz.kochab.uberspace.de/MP3-unicon/unicon_ionic/www/templates/profil.html';
	  		$scope.userData = JSON.parse(localStorage.getItem('userData'));;
	  		console.log($scope.userData);
	  	} else {
	  		console.log('Template -> login');
	  		$scope.modalTemplate = 'http://kaz.kochab.uberspace.de/MP3-unicon/unicon_ionic/www/templates/login.html';
	    }

		$ionicModal.fromTemplateUrl($scope.modalTemplate, {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal;
			$scope.modal.show();
		});
	};

  // Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

		var form_data= [{"name":"username","value":$scope.loginData.username},{"name":"password","value":$scope.loginData.password},{"name":"returnUrl","value":"/MP3/"},{"name":"service","value":"login"}];
    	$.ajax({
			type: "POST",
			dataType: "html",
            cache: false,
			url: '/MP3/api/user/ajaxlogin/',
			data: form_data,
			success: function(data){
				alert(data);
				console.log(data);
					console.log(typeof data);
				if(typeof data == 'string' && data == ''){
					localStorage.removeItem('userData');
					console.log('userdaten werden aus localstorage gelöscht');
				} else {
					try {
						var jsonData = JSON.parse(data);
						localStorage.setItem('userData',data);
					} catch(e){
						alert('Es gab ein Fehler beim Anmelden');
						console.log(e);
					}
					
		    		console.log('login success');

		    		$scope.$apply(function(){
		    			$scope.closeLogin();
		    		});
				}
			},
			error: function(e){
          		alert('Unable to get location: ' + e.message);
			}
		});
	};

	$scope.logout = function() {
		$http.get('http://kaz.kochab.uberspace.de/MP3/api/user/ajaxlogin?service=logout')
		.then(function(result) {
			console.log(result);
			localStorage.removeItem('userData');
			$scope.userData = {};
			$scope.closeLogin();
			$scope.login();
		});
	}
})


.controller('HomeCtrl', function($scope, $stateParams, $http, $ionicModal, $location, $state) {
	$scope.amount = 3;

 $scope.goHome = function() {
 	console.log('ab nachhause');
      /* $location.path('/tab/newpost'); */   /* this variant doesnt work */
      $state.go("/home"); 
    };
})

.controller('BrowseCtrl', function($scope) {
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
})

.controller('JamdetailCtrl', function($scope, $stateParams, $http, $ionicModal) {
	console.log($stateParams);

	// VARIABLEN DEKLARATION
	$scope.formData = {};
	$scope.details = {};
	$scope.userData = JSON.parse(localStorage.getItem('userData'));

	// DETAILS AJAX
	$http.get('http://kaz.kochab.uberspace.de/MP3/api/jam/getdetails?id=' + $stateParams.jamId).then(function(result) {
		console.log(result.data);
		$scope.details = result.data;
	});

	$ionicModal.fromTemplateUrl('http://kaz.kochab.uberspace.de/MP3-unicon/unicon_ionic/www/templates/detail_join.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});


	$scope.jamBeitreten = function(){
		console.log('----- jam beitreten ----------');
		if($scope.userData === null){
			$scope.userData = JSON.parse(localStorage.getItem('userData'));
		}

		if($scope.formData['instrument_id'] === undefined || $scope.userData === null){
			alert('Bitte wähle ein Instrument aus und logge dich ein, damit wir fortfahren können');
		} else {
			$http.get('http://kaz.kochab.uberspace.de/MP3/api/jam/join?jam_id='+$stateParams.jamId+'&user_id='+$scope.userData.id+'&instrument_id='+$scope.formData.instrument_id)
			.then(function(result) {
				console.log(result);
				alert(result.data);
			});
		}
	};

	// Funktion filtert Instrumente und gibt nur freie Instrumente zurück
	$scope.isAvailable = function(instruments){
		var result = [];

		angular.forEach(instruments, function(instrument, key) {
			if(instrument.user_id == '0'){
				result.push(instrument);
			}
		});

		return result;
	};

	$scope.isNotAvailable = function(instruments){
		var result = [];

		angular.forEach(instruments, function(instrument, key) {
			if(instrument.user_id != '0'){
				result.push(instrument);
			}
		});

		return result;
	};







	navigator.geolocation.getCurrentPosition(function(position){
		$scope.$apply(function(){
			console.log($scope.userData);
			$scope.userData.geo = [position.coords.latitude,position.coords.longitude];
			console.log($scope.userData);
			localStorage.setItem('userData',JSON.stringify($scope.userData));
	    	console.log('geolocation detected');
		});
	});

	$scope.show = function() { $scope.modal.show(); };
	$scope.close = function(){ $scope.modal.hide(); };

	// Distance Calculation
	$scope.distance = function(lat, lon){
		var radlat1 = Math.PI * lat/180
		var radlat2 = Math.PI * $scope.userGeo[0]/180
		var radlon1 = Math.PI * $scope.userGeo[1]/180
		var radlon2 = Math.PI * lon/180
		var theta = lon1-lon2
		var radtheta = Math.PI * theta/180
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		dist = Math.acos(dist)
		dist = dist * 180/Math.PI
		dist = dist * 60 * 1.1515
		dist = dist * 1.609344;
		return dist.toFixed(2);
	}
})


.controller('MyJamCtrl', function($scope, $stateParams, $http, $ionicModal) {
	$scope.amount = 3;

})

.controller('CreateCtrl', function($scope, $stateParams, $http, $compile, $ionicLoading) {
$scope.map = false;

	$scope.slideHasChanged = function($index){
		console.log($index);
		console.log('scope map: ' + typeof $scope.map);
		if($index == 1 && typeof $scope.map == 'boolean'){
		console.log('initialize');
		console.log($("#map123"));
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map123"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;

		console.log('scope map: ' + typeof $scope.map);
     }
		
	};

      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };




	$scope.master = {}; 
	//$scope.genres = dataService.getData();
	$scope.genres = [];
	//$scope.documents = [];
	$http.get('http://kaz.kochab.uberspace.de/MP3/api/jam/getgenre')
	  .then(function(result) {
	  	console.log(result);
	    $scope.genres = result.data;
	});
	

	$scope.update = function(jam) {
		$scope.master = angular.copy(jam);
	};


    
      
    });
