import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from "react-bootstrap/CardDeck";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import CardColumns from "react-bootstrap/CardColumns"
import GoogleMapReact from "google-map-react";

function Home() {
	const [latest, setlatest] = useState([]);
	const [results, setResults] =useState([]);


	useEffect(() =>{
		axios
		 	.all([
		 		axios.get("https://corona.lmao.ninja/v2/all"),
				axios.get("https://corona.lmao.ninja/v2/countries")
			])
			
			.then((responseArr) => {
				setlatest(responseArr[0].data);
				setResults(responseArr[1].data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const date = new Date(parseInt(latest.updated));
	const lastUpdated =date.toString();

	const countriesLocations = results.map((data, i) =>{
		return (
		<div
			lat={data.countryInfo.lat}
			lng={data.countryInfo.long}
			style={{
				color:"red",//text color
				backgroundColor:"#FFF", //white color background
				height:"25px",
				width:"35px",
				textAlign:"center"
			}}
		>
			<img height="10px" src={data.countryInfo.flag} />
			<br />
			{data.cases}
			</div>
			);

	});








	return (
		<div>
	    <br />
	    <h2 style={{ textAlign:"center" }}>Covid-19 everyday states</h2>
	    <h3 style={{ textAlign:"center" }}> group1 task1 </h3>
	    <br />
	    <CardDeck>
	  <Card 
	  	bg="warning" 
	  	text="white" 
	  	className="text-center" 
	  	style={{ margin:"10px"}}
	  	>
	    
	    <Card.Body>
	      <Card.Title>Cases</Card.Title>
	      <Card.Text>
	       {latest.cases}
	      </Card.Text>
	    </Card.Body>
	    <Card.Footer>
	      <small>Last updated {lastUpdated}</small>
	    </Card.Footer>
	  </Card>

	  <Card 
		  bg="secondary" 
		  text="white" 
		  className="text-center"
		  style={{ margin:"10px"}}
	  >
	    
	    <Card.Body>
	      <Card.Title>Deaths</Card.Title>
	      <Card.Text>
	      {latest.deaths}
	      </Card.Text>
	    </Card.Body>
	    <Card.Footer>
	      <small>Last updated {lastUpdated}</small>
	    </Card.Footer>
	  </Card>

	  <Card 
		  bg="danger" 
		  text="white" 
		  className="text-center"
		  style={{ margin:"10px"}}
	  >
	    
	    <Card.Body>
	      <Card.Title>Recovered</Card.Title>
	      <Card.Text>
	      {latest.recovered}
	      </Card.Text>
	    </Card.Body>
	    <Card.Footer>
	      <small>Last updated {lastUpdated}</small>
	    </Card.Footer>
	  </Card>
	</CardDeck>
	<br />


	<div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAhwBs9hrxY819-CAYKwFU9IkorGP6ilJE" }}
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={4}
        >

        {countriesLocations}      
        </GoogleMapReact>
      </div>
     </div>
	 );
}

	export default Home;
