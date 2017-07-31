import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Loading from './Loading.js';
import Moment from 'react-moment';
import api from '../utils/api';
import {convertTemp} from '../utils/helpers';

class Details extends Component {

	render() {
		const cityName = {
			fontSize: 30 + 'px',
		    color: '#333',
		    fontWeight: 100,
		    textAlign: 'center',
		    marginBottom: 50 + 'px'
		}
		var img = {
			display: 'block',
			margin: 0 + ' auto',
			height: 130 + 'px'
		}
		var subHeader = {
		    fontSize: 30 + 'px',
			color: '#333',
			fontWeight: 100,
			marginBottom: 50 + 'px',
			textAlign: 'center'
		}
		var {weather} = this.props.location.state,
			city = this.props.match.params.city,
			{dt} = this.props.location.state,
			{temp} = this.props.location.state,
			humidity = this.props.location.state.humidity

		return (
			<Grid>
				<Row>
					<img style={img} src={require('../assets/images/weather-icons/' + weather[0].icon + '.svg')} />
					<h2 style={subHeader}><Moment format="dddd MMMM DD" unix>{dt}</Moment></h2>
					<h2 style={cityName}>{city}</h2>
					<h2 style={subHeader}>{weather[0].description}</h2>
					<h2 style={subHeader}>Min Temp: {convertTemp(temp.min)}</h2>
					<h2 style={subHeader}>Max Temp: {convertTemp(temp.max)}</h2>
					<h2 style={subHeader}>Humidity: {humidity}</h2>
				</Row>
			</Grid>
		 )
	}
  
}

export default Details;