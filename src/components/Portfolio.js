import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = (props) => (
    <div>
        <h1>My Work</h1>
        <p>checkout the following things i have done.</p>
        
            <Link to="/portfolio/1">item one</Link>
            <Link to="/portfolio/2">item two</Link>
       
        
    </div>
);

export default Portfolio;