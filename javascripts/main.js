function initMap(){
        var roselle = {lat: 41.986, lng: -88.122};
        var dekalb = {lat: 41.929, lng: -88.750};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: roselle
        });
        var marker = new google.maps.Marker({
          position: roselle,
          map: map
        });
        var marker2 = new google.maps.Marker({
          position: dekalb,
          map: map
        });
}

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function calcRoute(){
        var request = {
                origin: "200 N Gary Ave Roselle, IL 60172",
                destination: "Dekalb, IL",
                travelMode: DRIVING,
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
