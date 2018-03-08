import React, { Component } from 'react';

import { chartConfigs, chartConfigs1 } from '../../config/charts';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';

charts(FusionCharts);

var completeData = [
    {
        label: "Bakersfield Central",
        category: "Retail",
        value: "880000",
        city: "NYC"
    },
    {
        label: "Garden Groove harbour",
        category: "General",
        value: "730000",
        city: "London"
    },
    {
        label: "Los Angeles Topanga",
        value: "590000",
        category: "Retail",
        city: "NYC"
    },
    {
        label: "Compton-Rancho Dom",
        value: "520000",
        category: "Retail",
        city: "NYC"
    },
    {
        label: "Daly City Serramonte",
        value: "330000",
        category: "General",
        city: "Mumbai"
    }
];

/** Pie Chart's 'dataSource' **/
var categoryChartDataSource = {
    chart: {
        theme:'ocean',
        enablemultislicing: "0",
        bgColor:"transparent",
        // color of the border
        borderColor: "FFFFFF",
    },
    data: [
        {
            label: "General",
            value: 0
        },
        {
            label: "Retail",
            value: 0
        }
    ]
};

/** Building data for Pie Chart based on the category of the mart stores **/
for (var i=0,len=completeData.length ; i<len ; i++) {
    if (completeData[i].category == "General") {
        categoryChartDataSource.data[0].value += 1;
    }
    else {
        categoryChartDataSource.data[1].value += 1;
    }
}

class Gauge extends Component {
  render() {
    let pieChartConfigs = {
        type: "pie2D",
        id: "pie_chart",
        renderAt: "gauge-chart",
        className: "inline_div",
        dataFormat: "json",
        defaultCenterLabel: "Total revenue: $64.08K",
        dataSource: categoryChartDataSource,
        width:400,
        height:300,
    }

    return (
      <ReactFC {...pieChartConfigs } />
    )
  }
}

export default Gauge;
