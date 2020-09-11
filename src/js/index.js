$(document).ready(function() {

    // contact page, map
    var latLong = [39.95, -75.1619];
    var mymap = L.map('mapid').setView(latLong, 13);
        
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/           copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    var marker = L.marker(latLong).addTo(mymap);
});