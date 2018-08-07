import {  Route, NavLink } from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import appleNavData from './apple-nav-data.js' ;

import React from 'react';


function Page(props) {
    console.log(props.match.params.sub, 'page')
    return (
        <div>
            {props.match.params.name} page
            {/* <Route path='/home/:subName' {props.match.params.sub.map( subItem => {
               return  <SubNav {...props} key={subItem.id}>{subAr.subName}</SubNav>
            })
            }   /> */}
             {appleNavData.map(item => {
          console.log(item.name)
         return item.sub.map( item => {
            return <NavLink key={item.id} to={`/${item.name.toLowerCase()}`}>{item.name}</NavLink>
          })
        })}
        </div>
    )
 }
    

export default Page;