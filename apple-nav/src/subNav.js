
import appleNavData from './apple-nav-data.js' ;
import React, { Component, Fragment } from 'react';
import {  Route, NavLink, Link} from "react-router-dom";




function SubNav(props) {
    console.log(props)
    return (
        <div>
            {appleNavData.map(item => (
                <div key={item.id}>
                    <Link to={`/${item.id}`}>{item.name}</Link>
    
                </div>
            ))}
        </div>
        
    )
 }
    

export default SubNav;