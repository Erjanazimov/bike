import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "../categoryBike/Home";
import AboutCategory from "../categoryBike/AboutCategory";
import Delivery from "../components/delivery/Delivery";
import Ride from "../components/ ride/ Ride";
import Contact from "../components/contact/Сontacts";
import Personal from "../components/personal/Personal";

const Router = () => {
    return (
      <>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={AboutCategory}/>
          <Route exact path='/delivery' component={Delivery}/>
          <Route exact path='/ride' component={Ride}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/personal' component={Personal}/>
      </Switch>
      </>
    );
};

export default Router;