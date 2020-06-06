const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=a1d18a6f2d361119a77a3ad037444f69&query=New%20York';

request({url: url, json: true}, (error, response) => {
    const data = response.body.current;
    const {temperature, feelslike, weather_descriptions} = data;
    console.log(`${weather_descriptions}. It is currently ${temperature} degrees out and it feels like ${feelslike} degrees out`);
});







