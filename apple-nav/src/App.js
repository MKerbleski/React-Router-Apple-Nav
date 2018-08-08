import React, { Component } from 'react';
import {  Route, NavLink } from "react-router-dom";
import styled from 'styled-components';
// import './App.css';
import appleNavData from './apple-nav-data.js' ;
import Page from './page.js' ;
import SubNav from './subNav.js' ;

export default class App extends Component {
  render(props) {
    return (
      <div className="app">
        <NavBar>
          {appleNavData.map( item => {
            return (
              <div>
                <NavLink key={item.id} activeClassName="activeNavButton" className="nav-link" sub={item.sub} to={`/${item.name.toLowerCase()}`}>{item.name}
                </NavLink>
              </div>
            )
            })
          }
        </NavBar>
        <Route exact path="/home" component={Home} />

        <Route path="/:id" render={props => {
          return <SubNav {...props} data={appleNavData} /> }} />

      </div>
      
    );
  }
}

function Home () {
  return (
    <div className="comp">Home Component</div>
  )
}
function Mac () {
  return (
    <div className="comp">Mac Component</div>
  )
}
function Ipad () {
  return (
    <div className="comp">
    <SubNav >Ipad</SubNav>
    
    Ipad</div>
  )
}


const NavBar = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  background-color: black;
`;