window.addEventListener('load', ()=>{
    let lon;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let cityName = document.querySelector(".location-city");
    let weatherIcon= document.querySelector(".icon");
    

    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            lon=position.coords.longitude;
            lat=position.coords.latitude;
       
    
        const api =`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=dd9cf3aa3b8d4051bcb9057f6e286ad8&units=I`
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                temperatureDegree.textContent = data.data[0].temp;
                cityName.textContent= data.data[0].city_name;
                temperatureDescription.textContent= data.data[0].weather.description;
                weatherIcon.textContent=data.data[0].weather.description;
                
            //    let iconAnimation = data.data[0].weather.icon;
            //     setIcons(iconAnimation, document.querySelector('.icon'))

            
            });
        });
}
// function setIcons(icon, iconID){
//     // const iconAnimation = data.data[0].weather.description;
//     const skycons= new Skycons ({color:"white"});
//     const currentIcon= weatherIcon.toUpperCase();
//     skycons.play();
//     return skycons.set(iconId, Skycons[currentIcon]);
// }
});