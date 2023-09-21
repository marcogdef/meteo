
function map(latitude, longitude){
    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

map(50.45, 10.45)

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault()
    let latitudine = document.querySelector("#lat").value
    let longitudine = document.querySelector("#lng").value

    console.log(latitudine, longitudine)

    let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitudine}&longitude=${longitudine}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m`


    console.log(url)

    fetch(url).then(function (resp) {
        return resp.json()
    }).then(function (data) {
        console.log(data.hourly.time)
        console.log(data.hourly.temperature_2m)
    })
})