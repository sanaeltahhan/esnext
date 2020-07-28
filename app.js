// LET
let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
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
        city: city,
        temperature: temperature
    };

}

const weather = getWeather(favoriteCityId);

console.log(weather);

// Affectation destructurée

const { city, temperature } = weather;

console.log(city);
console.log(temperature);

// Rest operator

const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

// Classe

class Trip {
    constructor(id, name, imageUrl,) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return "Trip [" + this.id + "," + this.name + "," + this.imageUrl + "," + this._price + "]";
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
parisTrip.price = 100;

const defaultTrip = Trip.getDefaultTrip();

console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());
console.log(defaultTrip.toString());

// Héritage

class FreeTrip extends Trip {

    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }

    // redéfinition de méthode toString()
    toStringConcat() {
        return "Free" + super.toString();
    }

}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");

console.log(freeTrip.toStringConcat());

// Promise, Set, Map, Arrow Function

console.log(`
#################################Trip Service##############################`)


class TripService {
    constructor() {
        // TODO Set of 3 trips
        //
        // new Trip('paris', 'Paris', 'img/paris.jpg')
        // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        this.setCity = new Set([
            new Trip('paris', 'Paris', 'img/paris.jpg'),
            new Trip('nantes', 'Nantes', 'img/nantes.jpg'),
            new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')]
            
        );
    }
    findByName(tripName) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                this.setCity.forEach(trip => {
                    if (trip.name === tripName) {
                        resolve(trip);
                    }  
                })
                reject("No trip with name xxx.");
            }, 2000)
        });
    }
}
class PriceService {
    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price == 100
        // 'rio-de-janeiro' --> price == 800)
        // no price for 'nantes'
        this.mapPrice = new Map ();
        this.mapPrice.set('paris', 100);
        this.mapPrice.set('rio-de-janeiro', 800);
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => { 
            setTimeout( () => {
                if (this.mapPrice.has(tripId)){
                    resolve(this.mapPrice.get(tripId));
                }
                reject(`No price found for id ${tripId}`);
        
            },2000)
        });
    }
}

const tripService = new TripService();
const priceService = new PriceService();

tripService.findByName('Paris').then(trip => console.log(trip), error => console.log(error));
tripService.findByName('Toulouse').then(trip => console.log(trip), error => console.log(error));

// chaînage
tripService.findByName('Rio de Janeiro')
    .then(trip => priceService.findPriceByTripId(trip.id)
        .then(price => console.log(price), error => console.log(error))
        , error => console.log(error));
tripService.findByName('Nantes')
    .then(trip => priceService.findPriceByTripId(trip.id)
        .then(price => console.log(price), error => console.log(error))
        , error => console.log(error));