import React from 'react';
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
	return (

        <nav>
            <Link to="/"><div>HOME PAGE</div></Link>
            
            <ul className="nav-links">
                <Link to="./graph"><li>Graph</li></Link>
            </ul>


        
        </nav>
		
		
		);
	 
}

	export default Nav;
