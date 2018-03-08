import React, { Component } from 'react';
import { Grid, Row, Col, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Grid fluid>
          <Row className="show-grid vertical-center">
            <Col xs={12} md={10}>
              <h1 className="text-center">Hệ thống giám sát chất lượng không khí</h1>
            </Col>
            <Col xs={6} md={2}>
              <ButtonToolbar>
                <DropdownButton
                  bsSize="small"
                  title="Profile"
                  id="dropdown-size-small"
                  className="dropdown-no-border"
                >
                  <MenuItem eventKey="2">Profile</MenuItem>
                  <MenuItem eventKey="1">Logout</MenuItem>
                </DropdownButton>
              </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Header;
