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
