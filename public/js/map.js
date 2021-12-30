// var mymap = L.map('gpsmap').setView([19.1760, 72.9777], 8); //([lat, long], zoom) =
var mymap = L.map('gpsmap').setView([0, 0], 1);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// const marker = L.marker([19.0760, 72.8777]).addTo(mymap);
const marker = L.marker([0, 0]).addTo(mymap);

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
};

let latitude = 19.0760;
    // const longitude = randomIntFromInterval(72.86,85);
let longitude = 72.8777;
function getloc(){
    // async const latitude = randomIntFromInterval(19.00,30);
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
};

// setInterval(getloc,1000);
getloc;

const socket2 = io.connect('http://localhost:3000/');
firstTime = true;
socket2.on('data', (arr) => {
    if(arr[3]=='C'){
        marker.setLatLng([arr[10], arr[11]]);
        
        if (firstTime) {
            mymap.setView([arr[10], arr[11]], 1);
            firstTime = false;
        }

        const circle = L.circle([arr[10], arr[11]], {
            color: "red",
            fillColor: "red",
            fillOpacity: 0.1,
            radius: 100.0
        }).addTo(mymap);

        document.getElementById("textlat").textContent = arr[10];
        document.getElementById("textlong").textContent = arr[11];
        document.getElementById("gpsalt_text").textContent = arr[12];
        document.getElementById("gpssats_text").textContent = arr[13];
        document.getElementById("gpstime_text").textContent = arr[9];
}});
// onMapReady(mymap);
// {
//     setTimeout(() => {
//       map.invalidateSize();
//     }, 0);
//  }