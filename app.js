window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
        })
    }
    fetch("https://api.weatherbit.io/v2.0/current?lat=23&lon=-30&key=dd9cf3aa3b8d4051bcb9057f6e286ad8")

    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
});
const temp = document.getElementsByClassName("temperature-degree")