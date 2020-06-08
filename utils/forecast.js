const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a1d18a6f2d361119a77a3ad037444f69&query=${longitude}, ${latitude}`;

    request({url: url, json: true}, (error, response) => {

        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if(response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, JSON.stringify({
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike,
                weather_descriptions: response.body.current.weather_descriptions
            }))
        }
    })
}

module.exports = forecast