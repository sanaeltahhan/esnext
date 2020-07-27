// LET
let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId= "paris";
console.log(favoriteCityId);

// CONST
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro", "tokyo"];
//console.log(citiesId.length);

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

// Affectation destructurée

const {city, temperature} = weather;

console.log(city);
console.log(temperature);

// Rest operator

const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

// Classe

class Trip {
    constructor(id, name, imageUrl, ) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString () {
        return "Trip [" + this.id + "," + this.name + ","  + this.imageUrl + "," + this._price + "]";
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    static getDefaultTrip() {
        return new Trip ("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
parisTrip._price = 100;

const defaultTrip = Trip.getDefaultTrip();

console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());
console.log(defaultTrip.toString());

// Héritage

class FreeTrip extends Trip{

    constructor(id, name, imageUrl, price ) {
        super(id,name,imageUrl);
        this.price =0;
    }

    // redéfinition de méthode toString()
    toStringConcat() {
        return "Free" + super.toString();
    }

}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");

console.log(freeTrip.toStringConcat());