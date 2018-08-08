import appleNavData from './apple-nav-data.js' ;
import React, { Component, Fragment } from 'react';
import {  Route, NavLink, Link} from "react-router-dom";

function Page(props) {
    
    console.log(props.match.params.banana)
    let bananaId = props.match.params.banana;
    let copy = appleNavData[bananaId].sub;
    console.log(copy);
    return (
        <div className="page-div">
            {props.match.params.apple}
        </div>
    )}

    

export default Page;