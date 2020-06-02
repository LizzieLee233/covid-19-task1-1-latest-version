import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from "react-bootstrap/CardDeck";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import CardColumns from "react-bootstrap/CardColumns"
import Columns from "react-columns";
import Form from "react-bootstrap/Form";

function App() {
	const [latest, setlatest] = useState("");
	const [results, setReslts] =useState([]);
	const [searchCountry, setSeachCountry ] = useState("");

	useEffect(() =>{
		axios
		 	.all([
			axios.get("https://corona.lmao.ninja/v2/all"),
			axios.get("https://corona.lmao.ninja/v2/countries")
			])
			
			.then(responseArr =>{
				setlatest(responseArr[0].data);
				setReslts(responseArr[1].data);
			})
			.catch(err =>{
				console.log(err);
			});
	}, []);

	const date = new Date(parseInt(latest.updated));
	const lastUpdated =date.toString();


	const filterCountry =results.filter(item =>{
		return searchCountry !== "" ? item.country === searchCountry : item;
	});

	const countries =filterCountry.map((data, i) =>{
	return(
		<Card 
			key={i}
		  	bg="light" 
		  	text="dark" 
		  	className="text-center" 
		  	style={{ margin:"10px"}}
	  	>
	    <Card.Img variant="top" src={data.countryInfo.flag} />
	    <Card.Body>
	      <Card.Title>{data.country}</Card.Title>
	      <Card.Text> Cases {data.cases}</Card.Text>
	      <Card.Text> Deaths {data.deaths}</Card.Text>
	      <Card.Text> Recovered {data.recovered}</Card.Text>
	      <Card.Text> Today's cases {data.todayCases}</Card.Text>
	      <Card.Text> Today's deaths {data.todayDeaths}</Card.Text>
	      <Card.Text> Active {data.active}</Card.Text>
	      <Card.Text> Critical {data.critical}</Card.Text>
	    </Card.Body>
	  </Card>
		);
	});



var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];





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

	<Form>
	  <Form.Group controlId="SEARCH">
	    <Form.Control type="text" placeholder="search one country " onChange={e =>setSeachCountry(e.target.value)} />
	</Form.Group>
	</Form>




	<Columns queries={queries}>{countries}</Columns>
	    </div>
	  );
	}

	export default App;
