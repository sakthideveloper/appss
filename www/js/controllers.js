angular.module('starter.controllers', [])

.controller('SchoolsCtrl', function($scope, $http, $timeout, $filter,  $ionicLoading, $stateParams, Schools) {

  $scope.active = 'List';
    $scope.setActive = function(type) {
        $scope.active = type;
    };
    $scope.isActive = function(type) {
        return type === $scope.active;
    };
           
          $scope.schools = Schools.all();
          $scope.counted = $scope.schools.length; 
          $scope.$watch("search", function(query){
          $scope.counted = $filter("filter")($scope.schools, query).length;
  
          })

     
		// Setup the loader
		$ionicLoading.show({
		content: 'Loading',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 200,
		showDelay: 0
		});

   // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
		$timeout(function () {
		$ionicLoading.hide();
		}, 2000);
   

		//geolocation start
	
   if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
        $scope.$apply(function(){
        $scope.position = position;
        
     

         $scope.latitude = position.coords.latitude;
         $scope.longitude = position.coords.longitude;


         // $http({method: 'GET', url: 'js/schools.json'}).success(function(data)
         //     {
         //      $scope.schools = data; // response data 

          $scope.schools = Schools.all();
          


          
            var c =0;  
            for(c=0; c<$scope.schools.length; c++)
            {

            gelDistance(parseFloat($scope.schools[c].Latitude).toFixed(3),parseFloat($scope.schools[c].Longitude).toFixed(3),c);

            }



 function gelDistance(Latitude,Longitude,c) {
   

  var location1 = new google.maps.LatLng($scope.latitude,$scope.longitude);

      var location2 = new google.maps.LatLng(Latitude,Longitude);

          directionsService = new google.maps.DirectionsService();
          directionsDisplay = new google.maps.DirectionsRenderer(
          {
          suppressMarkers: true,
          suppressInfoWindows: true
          });
          var request = {
          origin: location1, 
          destination:location2,
          travelMode: google.maps.DirectionsTravelMode.DRIVING
          };


          directionsService.route(request, function(response, status) 
          {

         // alert ('function'+c);
         //     alert (request);
           if (status == google.maps.DirectionsStatus.OK) 
            {
               $scope.$apply( function(){ 
            //  alert ('responce'+c);
              $scope.distance=parseFloat(response.routes[0].legs[0].distance.text);
              $scope.temp=$scope.Distance;
              $scope.schools[c].Distance=$scope.distance;

               });
            }

          }

          );                       

   } ;
        //});
      });
    });
  } 
  //geolocation end

})

.controller('SearchCtrl', function($scope, $location, $http, $templateCache, Schools){
 
$scope.selectedAddress = '';
$scope.getAddress = function(viewValue) {
    var params = {address: viewValue, sensor: false};
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
    .then(function(res) {
      return res.data.results;
    });
  };

$scope.schoolname = '';

  $scope.schools = [
  'Shri Krishnaswamy Matriculation Higher Secondary School', 
  'Kendriya Vidyalaya', 
  'Spartan Cbse School', 
  'Durga Nursery Tutorials',
  'Ellen Sharma Memorial Matric. Hr. Sec. School'
  ];

 $scope.search = function() {
             $scope.schools = Schools.all();
             var vm = $scope.schools;
            
             
              var url = "/tab/results?q=" +( vm.q || "") + "&km=" + (vm.km || "");
             $location.url(url);
        };

})


.controller('ResultCtrl', function($scope, $location, $filter, Schools){
  $scope.active = 'List';
    $scope.setActive = function(type) {
        $scope.active = type;
    };
    $scope.isActive = function(type) {
        return type === $scope.active;
    };
          $scope.schools = Schools.all();
          $scope.$watch("search", function(term){
          $scope.schools = Schools.all();
          $scope.counted = $filter("filter")($scope.schoolname, term).length;
        })

          function init() {
          var search = $location.search();
          var q = search.q;
          var km = search.km;
  }

  init();
            //geolocation start
  
   if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
        $scope.$apply(function(){
        $scope.position = position;
        
         $scope.latitude = position.coords.latitude;
         $scope.longitude = position.coords.longitude;


         var c =0;  
            for(c=0; c<$scope.schools.length; c++)
            {

            gelDistance(parseFloat($scope.schools[c].Latitude).toFixed(3),parseFloat($scope.schools[c].Longitude).toFixed(3),c);

            }



 function gelDistance(Latitude,Longitude,c) {
   

  var location1 = new google.maps.LatLng($scope.latitude,$scope.longitude);

      var location2 = new google.maps.LatLng(Latitude,Longitude);

          directionsService = new google.maps.DirectionsService();
          directionsDisplay = new google.maps.DirectionsRenderer(
          {
          suppressMarkers: true,
          suppressInfoWindows: true
          });
          var request = {
          origin: location1, 
          destination:location2,
          travelMode: google.maps.DirectionsTravelMode.DRIVING
          };


          directionsService.route(request, function(response, status) 
          {

         // alert ('function'+c);
         //     alert (request);
           if (status == google.maps.DirectionsStatus.OK) 
            {
               $scope.$apply( function(){ 
            //  alert ('responce'+c);
              $scope.distance=parseFloat(response.routes[0].legs[0].distance.text);
              $scope.temp=$scope.Distance;
              $scope.schools[c].Distance=$scope.distance;

               });
            }

          }

          );                       

   } ;
        
      });
    });
  } 
  //geolocation end
          
})



.controller('SchoolDetailCtrl', function($scope, $stateParams, $ionicHistory, Schools) {
	$scope.myGoBack = function() {
    $ionicHistory.goBack();
    };
     $scope.school = Schools.get($stateParams.schoolId);
     
      $scope.rateFunction = function(rating) {
     
    };
 	
 })



 
  .controller('MapCtrl', function($scope, $compile) {
    $scope.active = 'Map';
    $scope.setActive = function(type) {
        $scope.active = type;
    };
    $scope.isActive = function(type) {
        return type === $scope.active;
    };
    $scope.positions =[ 
    [13.090732, 80.208340], 
    [13.089039 , 80.190004], 
    [13.084873, 80.210175],
    [13.082680, 80.270718], 
    [13.084695, 80.225160]
   
    ];
      
         //    $scope.$on('mapInitialized', function (event, map) {
         //    $scope.objMapa = map;
         // });
             $scope.mapCreated = function(map) {
    $scope.map = map;
  };

         $scope.showInfoWindow = function (event, p) {
            var infowindow = new google.maps.InfoWindow();
            var center = new google.maps.LatLng(p[0],p[1]);

            infowindow.setContent(
                '<h3>' + p + '</h3>');

            infowindow.setPosition(center);
            infowindow.open($scope.map);
         };

   
 });




 

