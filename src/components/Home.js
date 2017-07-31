import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import WeatherForm from './WeatherForm.js';
import Forecast from './Forecast.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: ""
		};
	}

	handleSubmit = (location) => {
		this.setState({
			location: location
		});
	}

	render() {
		var location = this.state.location;
		return (
			<Grid>
				<Row>
					 <Col md={4}></Col>
					 <Col md={4} className="text-center">
					 <h2>Enter A City</h2>
					 	<WeatherForm match={this.props.match} onSubmit={this.handleSubmit}/>
					 </Col>
				   <Col md={4}></Col>
			    </Row>
			</Grid>
		);
	}
}

export default Home;