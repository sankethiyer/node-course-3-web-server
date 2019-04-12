const request = require('request')
const API_KEY = 'ed657b20e9e75590ded976a7c1b46d1f';

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/' + API_KEY + '/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast