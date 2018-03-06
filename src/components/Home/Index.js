import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, Media,
ButtonToolbar, Dropdown, DropdownButton, MenuItem, Panel  } from "react-bootstrap";
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';

import MapContainer from '../Map/Index';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    return(
      <div className="home-container">
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <MapContainer />
            </Col>
            <Col xs={12} md={6}>
            
              <Row className="profile-container">
                <Col xs={9}>
                  <div>
                    <Media>
                        <Media.Left>
                          <i className="fas fa-map-marker-alt fa-2x"></i>
                        </Media.Left>
                        <Media.Body>
                          No1. Kim Anh Building, Duy Tan, Ha Noi
                        </Media.Body>
                    </Media>
                    
                    <Media>
                        <Media.Left>
                          <i className="far fa-clock fa-2x"></i>
                        </Media.Left>
                        <Media.Body>
                          Cập nhật lần cuối {date}
                        </Media.Body>
                    </Media>
                  </div>
                </Col>
                <Col xs={3}>
                  <div>
                    <ButtonToolbar>
                      <DropdownButton
                        bsSize="small"
                        title="Thinklabs TH"
                        id="dropdown-size-small"
                      >
                        <MenuItem eventKey="1">Thinklabs TH</MenuItem>
                        <MenuItem eventKey="2">Thinklabs TH 1</MenuItem>
                        <MenuItem eventKey="3">Thinklabs TH 2</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Thinklabs TH 4</MenuItem>
                      </DropdownButton>
                    </ButtonToolbar>
                    </div>
                </Col>
              </Row>
              
              <Row className="air-quality-container">
                <Col xs={7}>
                  <div className="text-center">
                    <p>Chỉ số chất lượng không khí</p>
                    <p><i className="far fa-smile fa-2x"></i><span>50</span></p>
                    <p>Tốt</p>
                    <p>Không ảnh hưởng đến sức khỏe</p>
                  </div>
                </Col>
                <Col xs={5}>
                  <div className="fire-area">
                    <i className="fas fa-fire fa-2x"></i>
                    <span>23&#8451;</span>
                  </div>
                  <div className="tint-area">
                    <i className="fas fa-tint fa-2x"></i>
                    <span>70%</span>
                  </div>
                  <div className="tvoc-area">
                    <h3 className="pull-left">TVOC</h3>
                    <span className="pull-right">23 ppm</span>
                  </div>
                </Col>
              </Row>
              
              <Row className="aqi-container">
                <Col xs={7}>
                  <div>
                    <Panel>
                      <Panel.Heading>Chỉ số AQI cho từng thông số</Panel.Heading>
                      <Panel.Body>
                        <ul>
                          <li>CO 40</li>
                          <li>SO2 40</li>
                          <li>O3 40</li>
                          <li>CO2 40</li>
                          <li>NH3 40</li>
                          <li>PM2.5 40</li>
                        </ul>
                      </Panel.Body>
                    </Panel>
                  </div>
                </Col>
                <Col xs={5}>
                  <div>
                    <Panel>
                      <Panel.Heading>Chỉ số khác</Panel.Heading>
                      <Panel.Body>
                        <ul>
                          <li>PM1.0 40 ppm</li>
                          <li>Light 40 LUX</li>
                          <li>PM10 40 ppm</li>
                        </ul>
                      </Panel.Body>
                    </Panel>
                  </div>
                </Col>
              </Row>
              
              <Row className="graph-container">
                  <Col xs={12}>
                    <Panel>
                      <Panel.Body>
                        <div className="inline-block">
                          <ButtonToolbar>
                            <span className="pull-left">Thống kê</span>
                            <DropdownButton
                              bsSize="small"
                              title="CO2"
                              id="dropdown-size-small"
                            >
                              <MenuItem eventKey="CO">CO</MenuItem>
                              <MenuItem eventKey="SO2">SO2</MenuItem>
                              <MenuItem eventKey="O3">O3</MenuItem>
                              <MenuItem eventKey="NH3">NH3</MenuItem>
                              <MenuItem eventKey="PM2">PM2</MenuItem>
                            </DropdownButton>
                          </ButtonToolbar>
                        </div>
                        <div className="inline-block">
                          <DateRangePicker alwaysShowCalendars startDate="1/1/2014" endDate="3/1/2014" />
                        </div>
                      </Panel.Body>
                    </Panel>
                  </Col>
              </Row>
              
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Home;
