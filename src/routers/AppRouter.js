import React from 'react';
import { BrowserRouter, Route , Switch ,Link, NavLink} from 'react-router-dom';
import Home from '../components/Home';
import Contact from '../components/ContactPage';
import Portfolio from '../components/Portfolio';
import PortfolioItemPage from '../components/PortfolioItemPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter =() =>(
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/portfolio/:id" component={PortfolioItemPage} exact={true}/>
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio}  />  
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
)


export default AppRouter;