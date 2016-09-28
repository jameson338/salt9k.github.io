function initMap(){
        var roselle = {lat: 41.986, lng: -88.122};
        var elgin = {lat: 42.035, lng: -88.281};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: roselle
        });
        var marker = new google.maps.Marker({
          position: roselle,
          map: map
        });
        var marker2 = new google.maps.Marker({
          position: elgin,
          map: map
        });
}
