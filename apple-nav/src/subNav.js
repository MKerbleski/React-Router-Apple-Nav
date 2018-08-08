
import appleNavData from './apple-nav-data.js' ;
import React, { Component, Fragment } from 'react';
import {  Route, NavLink, Link} from "react-router-dom";




function SubNav(props) {
    
    console.log(props.match.params.banana)
    let bananaId = props.match.params.banana;
    let copy = appleNavData[bananaId].sub;
    console.log(copy);
    return (
        <div>
            {copy.map(item => (
                <Link 
                    key={item.id}
                    className="sub-list-items" 
                    to={`/${props.match.params.banana}/${item.name}`}>
                    {item.name}
                </Link>
                )
            )}
        </div>
    )}

    

export default SubNav;

// {appleNavData.map(item => {
//     console.log(item.name)
//    return item.sub.map( item => {
//       return <SubNav {...item} key={item.id} to={`/${item.name.toLowerCase()}`}>{item.name}</SubNav>
//     })
//   })}