export default class RentalService {
  static getRentals(){
    const apiKey = `${process.env.API_KEY}`;
    return fetch(`https://realty-mole-property-api.p.rapidapi.com/rentalPrice?compCount=5&squareFootage=1600&bathrooms=2&latitude=45.516933&longitude=-122.643568&propertyType=Apartment&bedrooms=4`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
        "x-rapidapi-key": apiKey
      }
    })
      .then(response => {
        if (!response.ok) {
          throw Error (response.statusText);
        }
        return response.json();
      })
      .catch(err => {
        return err;
      });
  }
}

