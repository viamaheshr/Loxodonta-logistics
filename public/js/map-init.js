function initMap() {
    var mapOptions = { // define options
        zoom: 11,
        center: new google.maps.LatLng(40.6700, -73.9400), // New York
        styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]
    };
    var mapElement = document.getElementById('location-map'); // div that is loading the map
    var map = new google.maps.Map(mapElement, mapOptions); // create a new map instance
    var image = 'public/img/map-marker.png'; // custom google marker image

    var icon = {
        url: "public/img/map-marker.png", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'A-Z Logistics',
        icon: icon
    });
}