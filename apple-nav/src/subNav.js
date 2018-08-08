
import appleNavData from './apple-nav-data.js' ;
import React, { Component, Fragment } from 'react';
import {  Route, NavLink, Link} from "react-router-dom";




function SubNav(props) {
    
    console.log(props.match.params.banana)
    let bananaId = props.match.params.banana;
    let copy = appleNavData[bananaId].sub;
    console.log(copy);
    return (
        <div className="another">
            {copy.map(item => (
                <div >
                    <Link 
                        className="sub-list-items"
                        key={item.id}
                        to={`/${props.match.params.banana}/${item.name}`}>
                        <img src={item.img} alt=" " />
                        {item.name}
                    </Link>
                </div>
                
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