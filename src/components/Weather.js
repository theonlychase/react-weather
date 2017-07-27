import React, { Component } from 'react';
import { Link }  from "react-router-dom";
import { Col } from 'react-bootstrap';
import Moment from 'react-moment';

class Weather extends Component {
	render() {
		var index = this.props.index,
		    {weather} = this.props.result,
		    {dt} = this.props.result,
		    name = this.props.name,
		     match = this.props.match;

		var img = {
			display: 'block',
			margin: 0 + ' auto',
			height: 130 + 'px'
		}
		var subHeader = {
		    fontSize: 30 + 'px',
			color: '#333',
			fontWeight: 100,
			marginBottom: 50 + 'px'
		}
		return (
			<Col key={index} md={4}>
				<div className="text-center">
					<Link
			            to={{
			              pathname: '/details/',
			              search: name
		            }}>
		              <img style={img} src={require('../assets/images/weather-icons/' + weather[0].icon + '.svg')} />
		          	</Link>
					<h2 style={subHeader}><Moment format="dddd MMMM DD" unix>{dt}</Moment></h2>
				</div>
			</Col>
		 )
	}
  
}

export default Weather;