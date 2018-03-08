import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Gauge from './Gauge';

export default class IndexGauge extends Component {
  render() {
    return (
      <div id="gauge-chart">
        <Gauge />
      </div>
    )
  }
}
