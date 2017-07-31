import React, { Component } from 'react'; 
import { Grid, Row } from 'react-bootstrap';
import Weather from './Weather.js';
import Loading from './Loading.js';
import queryString from 'query-string';
import api from '../utils/api';

class Forecast extends Component {
	constructor(props) {
		super(props);

		this.state = {
			results: null,
			loading: true
		}
	}

	componentDidMount() {
		var location = queryString.parse(this.props.location.search);
		api.getWeather(location.city)
			.then(function(data) {
				this.setState({
					results: data,
					loading: false
				});
		}.bind(this));
	}

	render() {
		const cityName = {
			fontSize: 65 + 'px',
		    color: '#333',
		    fontWeight: 100,
		    textAlign: 'center',
		    marginBottom: 50 + 'px'
		}
		var loading = this.state.loading;
		var match = this.props.match;

		if (loading === true) {
			return <Loading />
		}

		var results = this.state.results.list;
		var name = this.state.results.city.name;

		return (
			<Grid>
				<Row>
					<h1 style={cityName}>{name}</h1>
					{results.map((result, index) => (
						<Weather key={index} match={match} name={name} index={index} result={result} />
					))}
				</Row>
			</Grid>
		 )
	}
  
}

export default Forecast;