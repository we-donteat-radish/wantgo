import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Index from './pages/index'
import Design from './pages/design'
import Stroll from './pages/stroll'
import Mine from './pages/mine'

const BasicRoute = (props)=>{
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={Index}></Route>
                    <Route path="/Design"  component={Design}></Route>
                    <Route path="/Stroll" component={Stroll}></Route>
                    <Route path="/Mine" component={Mine}></Route>
                </Switch>
                <Footer></Footer>
            </div>
        </BrowserRouter>
    )
}

export default BasicRoute;
