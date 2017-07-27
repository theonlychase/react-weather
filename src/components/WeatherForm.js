import React, { Component } from 'react';
import { Link }  from "react-router-dom";
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class WeatherForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: ""
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log("current state", this.state.location);
		this.props.onSubmit(
	      this.state.location
	    );
	}

	handleChange = (event) => {
		var value = event.target.value;

		this.setState({
			location: value
		});
	}

	render() {
		var match = this.props.match,
		    location = this.state.location;

		const btn = {
		  background: '#5cb85c',
		  color: '#fff'
		};
		return (
			<Form onSubmit={this.handleSubmit}>
		      <FormGroup>
		        <FormControl 
		        	onChange={this.handleChange}
		        	value={this.state.location} 
		        	bsSize="lg" type="text" 
		        	placeholder="Search" />
		      </FormGroup>
		      
	          <Link
	            className='btn btn-success btn-lg'
	            to={{
	              pathname: match.url + 'forecast',
	              search: '?city=' + location
	            }}>
	              Get Weather
	          </Link>
		    </Form>
		);
	}
}

export default WeatherForm;