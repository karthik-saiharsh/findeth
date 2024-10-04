let route; // Global Variable for route
let map; // Global Variable for map

function fetchData() {
    alert("IMPORTANT INFORMATION: Please allow location access if prompted for.");
    setMap();
    document.getElementById("page_title").innerHTML = sessionStorage.getItem("location_name");
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
            L.latLng(parseFloat(sessionStorage.getItem("lat")), parseFloat(sessionStorage.getItem("long")))
        ],
        routeWhileDragging: false
    });

    route.addTo(map);
}

function getRoute() {
    navigator.geolocation.getCurrentPosition(success, error);
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

    latitude = parseFloat(sessionStorage.getItem("lat"));
    longitude = parseFloat(sessionStorage.getItem("long"));
    marker = new L.Marker([latitude, longitude]);
    marker.addTo(map);
    marker.bindPopup(sessionStorage.getItem("location_name"));
}
