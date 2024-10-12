let route; // Global Variable for route
let map; // Global Variable for map
let dropdownMenu = document.getElementById("dropdown");

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

        let opt = document.createElement('option');
        opt.innerHTML = all_places[i]["name"];
        opt.value  = `${all_places[i]["name"]}+${all_places[i]["latitude"]}+${all_places[i]["longitude"]}`;
        dropdownMenu.appendChild(opt);
    }
}


function showPlace(event) {
    let info = event.target.value;
    info = info.trim().split("+");
    open(`../map/index.html?location_name=${info[0]}&lat=${info[1]}&long=${info[2]}&from=locs`, "_self");
}