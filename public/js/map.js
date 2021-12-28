var mymap = L.map('gpsmap').setView([19.1760, 72.9777], 8); //([lat, long], zoom) =

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const marker = L.marker([19.0760, 72.8777]).addTo(mymap);

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(mymap);
let num=0;
function randomIntFromInterval(min, max) { // min and max included 
    // return Math.floor(Math.random() * (max - min + 1) + min)
    // let num=0;
    while (num<max){
        num = min+0.1; 
    }
    return num;
}

let latitude = 19.0760;
    // const longitude = randomIntFromInterval(72.86,85);
let longitude = 72.8777
async function getloc(){
    // const latitude = randomIntFromInterval(19.00,30);
    // const latitude = 19.0760;
    // // const longitude = randomIntFromInterval(72.86,85);
    // const longitude = 72.8777
    // L.marker([latitude, longitude]).addTo(mymap);
    marker.setLatLng([latitude, longitude]);
    latitude = latitude + 0.05
    longitude = longitude + 0.05
    L.circle([latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.1,
        radius: 500
    }).addTo(mymap);
    document.getElementById("textlat").textContent = latitude.toFixed(2);
    document.getElementById("textlong").textContent = longitude.toFixed(2);
}
setInterval(getloc,1000);