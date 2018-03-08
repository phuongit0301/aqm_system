export const chartConfigs = {
   	id: "revenue-chart",
   	renderAt: "gauge-chart",
   	type: "column2d",
   	width:600,
   	height: 400,
   	dataFormat: "json",
   	dataSource: {
       	chart: {
           	caption: "Harry's SuperMart",
           	subCaption: "Top 5 stores in last month by revenue",
           	numberPrefix: "$",
       	},
       	data:[
    	    {
    	       	label: "Bakersfield Central",
    	       	value: "880000"
    	   	},
    	   	{
    	       	label: "Garden Groove harbour",
    	       	value: "730000"
    	    },
    	    {
    	       	label: "Los Angeles Topanga",
    	       	value: "590000"
    	    },
    	    {
    	       	label: "Compton-Rancho Dom",
    	       	value: "520000"
    	    },
    	    {
    	       	label: "Daly City Serramonte",
    	       	value: "330000"
    	    }
       	]
    }
};

export const chartConfigs1 = {
    type:  "angulargauge",
    renderAt:  "gauge-chart",
    width:  "400",
    height:  "250",
    dataFormat:  "json",
    dataSource:  {
        chart:  {
            caption:  "Customer Satisfaction Score",
            subcaption:  "Last week",
            lowerLimit:  "0",
            upperLimit:  "100",
        },
        colorRange:  {
            color:  [{
                    minValue:  "0",
                    maxValue:  "50",
                    code:  "#e44a00"
                },
                {
                    minValue:  "50",
                    maxValue:  "75",
                    code:  "#f8bd19"
                },
                {
                    minValue:  "75",
                    maxValue:  "100",
                    code:  "#6baa01"
                }
            ]
        },
        dials:  {
            dial:  [{
                value:  "67"
            }]
        }
    }
}

export const categoryChartConfigs = {
    type: "pie2D",
    id: "category-chart",
    renderAt: "gauge-chart",
    className: "inline_div",
    dataFormat: "json",
    defaultCenterLabel: "Total revenue: $64.08K",
    dataSource: {
        chart: {
            caption: "Categories of Harry's SuperMart",
            theme:"fint",
            enablemultislicing: "0"
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
    },
    width:400,
    height:300
}

export const lineChartData = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

export const pieChartData = [
  {name: 'Group A', value: 400}, {name: 'Group B', value: 300},
  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}
];
