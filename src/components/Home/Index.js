import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, Media,
ButtonToolbar, Dropdown, DropdownButton, MenuItem, Panel  } from "react-bootstrap";
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from 'recharts';

import MapContainer from '../Map/Index';
// import GaugeChart from '../Charts/GaugeChart';
// import the component
import ReactSpeedometer from "react-d3-speedometer";
import IndexGauge from '../Charts/IndexGauge';
import DateRangePicker from '../DateRangePicker/Index';
import { lineChartData, pieChartData } from '../../config/charts';

class Home extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let getName = (x) => { return x.name };

    return(
      <div className="home-container">
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={12} md={4}>
              <MapContainer />
            </Col>
            <Col xs={12} md={8}>
              <Panel>
                <Panel.Body>
                  <Row className="profile-container">
                    <Col xs={12} className="flex-row">
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
                    </Col>
                  </Row>
                </Panel.Body>
              </Panel>

              <Row className="air-quality-container">
                <Col xs={12} className="flex-row">
                  <ReactSpeedometer
                      value={500}
                      segments={3}
                      width={250}
                      height={250}
                      needleTransitionDuration={4000}
                      needleTransition="easeElastic"
                      currentValueText="${value}"
                   />
                   <ReactSpeedometer
                       value={500}
                       width={250}
                       height={250}
                       segments={3}
                       needleTransitionDuration={4000}
                       needleTransition="easeElastic"
                       currentValueText="${value} ppm"
                    />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="aqi-container equal">
            <Col xs={12} md={8}>
                <Panel>
                  <Panel.Heading>Chỉ số AQI cho từng thông số</Panel.Heading>
                  <Panel.Body className="flex-row-wrap">
                      <ReactSpeedometer
                          value={500}
                          width={240}
                          height={240}
                          segments={3}
                          needleTransitionDuration={4000}
                          needleTransition="easeElastic"
                          currentValueText="${value} ppm"
                       />
                       <ReactSpeedometer
                           value={500}
                           width={240}
                           height={240}
                           segments={3}
                           needleTransitionDuration={4000}
                           needleTransition="easeElastic"
                           currentValueText="${value} ppm"
                        />
                        <ReactSpeedometer
                            value={500}
                            width={240}
                            height={240}
                            segments={3}
                            needleTransitionDuration={4000}
                            needleTransition="easeElastic"
                            currentValueText="${value} ppm"
                         />
                         <ReactSpeedometer
                             value={500}
                             width={240}
                             height={240}
                             segments={3}
                             needleTransitionDuration={4000}
                             needleTransition="easeElastic"
                             currentValueText="${value} ppm"
                          />
                          <ReactSpeedometer
                              value={500}
                              width={240}
                              height={240}
                              segments={3}
                              needleTransitionDuration={4000}
                              needleTransition="easeElastic"
                              currentValueText="${value} ppm"
                           />
                           <ReactSpeedometer
                               value={500}
                               width={240}
                               height={240}
                               segments={3}
                               needleTransitionDuration={4000}
                               needleTransition="easeElastic"
                               currentValueText="${value} ppm"
                            />
                  </Panel.Body>
                </Panel>
            </Col>
            <Col xs={12} md={4}>
                <Panel>
                  <Panel.Heading>Chỉ số khác</Panel.Heading>
                  <Panel.Body>

                  </Panel.Body>
                </Panel>
            </Col>
          </Row>

          <Row className="graph-container">
              <Col xs={12}>
                <Panel>
                  <Panel.Body>
                  <Row>
                    <Col xs={12}>
                        <div className="statistical-container">
                          <span>Thống kê</span>
                          <ButtonToolbar>
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

                          <DateRangePicker />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={7}>
                        <div>
                          <LineChart width={600} height={300} data={lineChartData}
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                             <XAxis dataKey="name"/>
                             <YAxis/>
                             <CartesianGrid strokeDasharray="3 3"/>
                             <Tooltip/>
                             <Legend />
                             <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                          </LineChart>
                        </div>
                      </Col>

                      <Col xs={5}>
                        <PieChart width={800} height={400}>
                          <Pie allowDataOverflow={true} dataKey={getName} startAngle={180} endAngle={0} data={pieChartData} cx={200} cy={200} outerRadius={80} fill="#8884d8" />
                         </PieChart>
                      </Col>
                    </Row>
                  </Panel.Body>
                </Panel>
              </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Home;
