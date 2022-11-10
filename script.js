const url = "https://api.openweathermap.org/data/2.5/";
const apikey = "dc50dbe84e284d0c97202fc17028342c";

const cityenter = (e) => {
    if(e.keyCode == "13"){
        getResult(citysearchbar.value)
    }
};

const getResult= (cityName)=>{
    let istek =`${url}weather?q=${cityName}&appid=${apikey}&units=metric&lang=tr`;
    fetch(istek)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
};
const displayResult = (weather) =>{
    let city = document.querySelector(".city");
    city.innerText = `${weather.name} ${weather.sys.country}`;

    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(weather.main.temp)} C`;

    let description = document.querySelector(".description");
    description.innerText = weather.weather[0].description;

    let minmax = document.querySelector(".minmax");
    minmax.innerText = `${Math.round(weather.main.temp_min)} C / ${Math.round(weather.main.temp_max)} C`;
};

const searchbar = document.getElementById("citysearchbar");
searchbar.addEventListener("keypress", cityenter);





