import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={12} md={10}>
              <h1 className="text-center">HỆ thống giám sát chất lượng không khí</h1>
            </Col>
            <Col xs={6} md={2}>
              <code>Profile</code>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Header;
