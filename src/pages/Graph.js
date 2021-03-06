import React from 'react';
import "../App.css";
import ReactApexChart from "react-apexcharts";
//npm i react-apexcharts
//npm i apexcharts
//the dataset comes from API: https://disease.sh
//disease.sh/v2/historical/all?lastdays=all

function Graph() {
	
	const series = [
		{
		name: 'Cases',
		data: [555, 12038, 69030, 88369, 167466, 932638, 2055423,3343777,4542347,6266192],
	  }, {
		name: 'Recovered',
		data: [28, 284, 9394, 42710, 76026, 191853, 501538,1029651,1600159,2645918],
	  },{
		name: 'Deaths',
		data: [17, 259, 1666, 2996, 6472, 49675, 140658,238619,307666,375559],
	  },
	];

	const options = {
	
		dataLabels: {
		  enabled: true,//if it is 
		},
		stroke: {
		  curve: 'smooth'
		},
		xaxis: {
		  type: 'datetime',
		  categories: [
			"1/22/20",
		     "2/1/20",
			"2/15/20",
			 "3/1/20",
			  "3/15/20", 
			  "4/1/20", 
			  "4/15/20",
			  "5/1/20",
			  "5/15/20",
			  "6/1/20",
			],
		},
		tooltip: {
		  x: {
			format: 'dd/MM/yy'
		  },
		},
	  }
	
	
	
	return (

		<div
			style={{
				backgroundColor:"white",
				textAlign:"center",
			}}
		>
			<br />
			<h2>covid-19 Global impact</h2>
			<br />
			<ReactApexChart options={options} series={series} type="bar" height={350} />
			<br />
			<br />
			<ReactApexChart options={options} series={series} type="line" height={350} />
			<br />
			<br />
			<ReactApexChart options={options} series={series} type="area" height={350} />
			<br />
		</div>
		);//in here, you can change the type whatever you like: such as area, bar, line... or ,you can create many of them
	 
}

	export default Graph;
