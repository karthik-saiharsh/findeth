let route; // Global Variable for route
let map; // Global Variable for map
let destination; // Global variable refers to destination point
const search_string = window.location.search;
const query_params = new URLSearchParams(search_string);
let marker; // Global variable refers to dynamic Point that updates current position of user

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


var options_for_map = {
    enableHighAccuracy: true,
    timeout: 10_000,
    maximumAge: 5_000
}

function fetchData() {
    alert("IMPORTANT INFORMATION: Please allow location access if prompted for.");
    setMap();
    document.getElementById("page_title").innerHTML = query_params.get("location_name");
}

if (!navigator.geolocation) {
    alert("Location service is not available!!");
}

function error() {
    alert("Unable to fetch your location. Please make sure that location access is allowed for this site.");
}

function success(position) {
    try{
        // Removes old path if one already exists
        map.removeControl(route);
    } catch (e) {
        console.log(e);
    }

    route = L.Routing.control( {
        waypoints: [
            L.latLng(position.coords.latitude, position.coords.longitude),
            L.latLng(parseFloat(query_params.get("lat")), parseFloat(query_params.get("long")))
        ],
        routeWhileDragging: false,
        createMarker: function (i, waypoint, n) {
            return null
        }
    });

    route.addTo(map);
}

function update_marker(position) {
    try {
        // Removes old marker
        map.removeLayer(marker);
    } catch(e) {
        console.log("Couldn't remove old location");
    }
    marker = new L.Marker([position.coords.latitude, position.coords.longitude], {icon: greenIcon});
    marker.addTo(map);
    marker.bindPopup("You are here", {autoClose: false});
    marker.openPopup();
    destination.openPopup();
}

function getRoute() {
    navigator.geolocation.getCurrentPosition(success, error, options_for_map);
    navigator.geolocation.watchPosition(update_marker, error, options_for_map);
    new L.Popup().setLatLng([(position.coords.latitude+parseFloat(query_params.get("lat")))/2, (position.coords.longitude+parseFloat(query_params.get("long")))/2])
    .setContent("Follow the red path to reach your destination. The green marker moves as you move")
    .openOn(map);
}

function updateMapHeight() {
    let hero = document.getElementById("header");
    let _ = getComputedStyle(hero);
    let heightOccupied = _.getPropertyValue('height');

    let body = document.getElementById("body");
    let __ = getComputedStyle(body);
    let heightTotal = __.getPropertyValue('height');

    document.getElementById("map").style.height = `calc(${heightTotal} - ${heightOccupied})`;
}

function setMap() {
    // Create a Map and set view to Amrita
    map = L.map("map");
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
    map.setView([10.903538, 76.899816], 16);

    latitude = parseFloat(query_params.get("lat"));
    longitude = parseFloat(query_params.get("long"));
    destination = new L.Marker([latitude, longitude]);
    destination.addTo(map);
    destination.bindPopup(query_params.get("location_name"), {autoClose: false});
}


function go_back() {
    let prev = query_params.get("from");
    if(prev == "info") {
        open("../info/main.html", "_self");
    }
    else if(prev == "locs") {
        open("../locs/index.html", "_self");
    } else {
        window.history.back();
        location.reload();
    }
}
