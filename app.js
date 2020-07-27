// LET
let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId= "paris";
console.log(favoriteCityId);

// CONST
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro", "tokyo"];
console.log(citiesId);

//citiesId = [];
 //citiesId = ["paris", "nyc", "rome", "rio-de-janeiro","tokyo"];

console.log(citiesId);

// Creation objet

function getWeather(cityId) {

    let city = cityId.toUpperCase();
    const temperature = 20;

    return {
        city : city ,
        temperature : temperature
    };

}

const weather = getWeather(favoriteCityId);

console.log(weather);