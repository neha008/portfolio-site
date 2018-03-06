import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioItemPage = (props) => (
    <div>
        <h1>A thing i have done</h1>
        <p>this page for id {props.match.params.id}</p>
    </div>
);

export default PortfolioItemPage;