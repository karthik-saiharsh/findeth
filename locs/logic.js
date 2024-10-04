let route; // Global Variable for route
let map; // Global Variable for map

function fetchData() {
    setMap();
    document.getElementById("page_title").innerHTML = all_places[0];
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

    for(let i=1; i<all_places.length; i++) {
        new L.Marker([parseFloat(all_places[i]["latitude"]), parseFloat(all_places[i]["longitude"])]).addTo(map).bindPopup(all_places[i]["name"]);
    }

}
