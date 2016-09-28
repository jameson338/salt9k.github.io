function initMap(){
        var roselle = {lat: 41.986, lng: -88.122};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: roselle
        });
        var marker = new google.maps.Marker({
          position: roselle,
          map: map
        });
}
