var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initMap(){
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom:10,
    center: chicago
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsDisplay.setMap(map);
}

function calcRoute(){
        var request = {
                origin: 'Roselle, IL',
                destination: 'Dekalb, IL',
                travelMode: 'DRIVING'
                //transitOptions: TransitOptions,
                //drivingOptions: DrivingOptions,
                //unitSystem: UnitSystem,
                //waypoints[]: DirectionsWaypoint,
                //optimizeWaypoints: Boolean,
                //provideRouteAlternatives: Boolean,
                //avoidHighways: Boolean,
                //avoidTolls: Boolean,
                //region: String
        };
directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
        
}
