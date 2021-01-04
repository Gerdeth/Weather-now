window.addEventListener('load', ()=>{
    let lon;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            lon=position.coords.longitude;
            lat=position.coords.latitude;
       
    
    const api =`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=dd9cf3aa3b8d4051bcb9057f6e286ad8`
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });
    })}   
});
const temp = document.getElementsByClassName("temperature-degree")