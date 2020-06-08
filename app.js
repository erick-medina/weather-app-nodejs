const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

/*const url = 'http://api.weatherstack.com/current?access_key=a1d18a6f2d361119a77a3ad037444f69&query=';

request({url: url, json: true}, (error, response) => { // 'json: true' to replace JSON.parse
    if (error) {
        console.log('Unable to connect to weather service')
    } else if(response.body.error) {
        console.log('Unable to find location')
    } else {
        const data = response.body.current;
        const {temperature, feelslike, weather_descriptions} = data;
        console.log(`${weather_descriptions}. It is currently ${temperature} degrees out and it feels like ${feelslike} degrees out`);
    }
});*/

const address = process.argv[2]; // to enter command value in terminal

if (!address) {
    console.log('Please provide an address and try again')
} else {
    geocode(address, (error, {longitude, latitude, location}) => {
        if (error) {
            return console.log(error);
        } 
    
       forecast(latitude, longitude, (error, dataForecast) => {
           if (error) {
               console.log(error)
           }
        console.log(location)
        console.log(dataForecast)
    });
})
}


 



