import axios from 'axios';
import apiConfig from './config';

var id = apiConfig.key;
var params = "&type=accurate&APPID=" + id;

var api = {
	getWeather: function(location) {
		return axios.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + params + '&cnt=5') 
		.then(function(city) {
			return city.data;
		});
	},

	getForecast: function(location) {
		return axios.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=' + location + params)
		.then(function(city) {
			return city.data;
		});
	}
}

export default api;