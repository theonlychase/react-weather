import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class NoMatch extends Component {
	render() {
		return (
			<Grid>
          <Row>
            <Col lg={12}>
             <h2>Big fat 404!</h2>
             <p>This page doesn't exit</p>
            </Col>
          </Row>
      </Grid>
		);
	}
}
export default NoMatch;