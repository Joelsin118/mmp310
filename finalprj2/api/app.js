//  map center and zoom level
var map = L.map('map').setView([40.71, -74.00], 12);


var controlLayers = L.control.layers(null, null, {
    position: "topright",
    collapsed: false
}).addTo(map);

/* BASELAYERS */

var lightAll = new L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);
controlLayers.addBaseLayer(lightAll, 'Gray basemap ');

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
controlLayers.addBaseLayer(Esri_WorldImagery, 'Satellite basemap');

// Esri streets basemapLayer )
var Esri_Streets = L.esri.basemapLayer('Streets');
controlLayers.addBaseLayer(Esri_Streets, 'Street basemap ');

/* OVERLAYS */

$.getJSON("https://data.cityofnewyork.us/resource/qiz3-axqb.geojson?&$$app_token=FSlYvSN3wE46q1ZvCx5sqz4cz", function (data) {
    var geoJsonLayer = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            var circle = L.circleMarker(latlng, {
                radius: 6,
                fillColor: "#cda1fc",
                color: "orange",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.7
            });
            circle.bindPopup("<h4>Person Injured : " + feature.properties.number_of_persons_injured + '<br>' + "<h4>Zipcode : " +
                feature.properties.zip_code + '<br>' + "<h4>Street : " + feature.properties.on_street_name);
            return circle;
        }
    }).addTo(map); // display by default
    controlLayers.addOverlay(geoJsonLayer, '2018 Collision From Sept');
});

// load open data from Socrata 
$.getJSON("https://data.cityofnewyork.us/resource/u75w-kd3v.geojson?&$$app_token=FSlYvSN3wE46q1ZvCx5sqz4cz", function (data) {
    var geoJsonLayer = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            var circle = L.circleMarker(latlng, {
                radius: 6,
                fillColor: "brown",
                color: "purple",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.7
            });
            circle.bindPopup("<h4>Tree condition : " + feature.properties.from_st + '<br>' + feature.properties.new_humps);
        }
    });

    controlLayers.addOverlay(geoJsonLayer, 'Speed Bump');
});

$.getJSON("https://data.cityofnewyork.us/resource/5rq2-4hqu.geojson?&$$app_token=FSlYvSN3wE46q1ZvCx5sqz4cz", function (data) {
    var geoJsonLayer = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            var circle = L.circleMarker(latlng, {
                radius: 6,
                fillColor: "#a5564a",
                color: "green",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.7

            });
            circle.bindPopup("<h4>Tree condition : " + feature.properties.health + '<br>' + "<h4>Location : " + feature.properties.nta_name + '<br>' + "<h4>Tree Species: " + feature.properties.spc_common);
            return circle;
        }
    });
    controlLayers.addOverlay(geoJsonLayer, '2015 Street Tree Census ');
});
