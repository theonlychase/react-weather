import axios from 'axios';
import apiConfig from './config';

var id = apiConfig.key;
var params = "&type=accurate&APPID=" + id;

var api = {
	getWeather: function(location) {
		return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + params + '&cnt=5') 
		.then(function(city) {
			console.log("data is: ", city.data);
			return city.data;
		});
	},

	getForecast: function(location) {
		return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + params)
		.then(function(city) {
			console.log("new city" + city.data);
			return city.data;
		});
	}
}

export default api;