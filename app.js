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
                const{temp,city_name,weather}= data.data[0];
                temperatureDegree.textContent = temp;
                cityName.textContent= city_name;
                temperatureDescription.textContent= weather.description;
            
                
         
                
            
            });
        });
    }
    

    
});