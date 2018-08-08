import React, { Component } from 'react';
import {  Route, NavLink } from "react-router-dom";
import styled from 'styled-components';
// import './App.css';
import appleNavData from './apple-nav-data.js' ;
import Page from './page.js' ;
import SubNav from './subNav.js' ;

export default class App extends Component {

  render(props) {
    // constructor(props){
    //   super();
    //   this.state{
    //     activeId: 0,
    //   }
    // };

    return (
      <div className="app">
        <NavBar>
          {appleNavData.map( item => {
            return (
              <div>
                <NavLink key={item.id} activeClassName="activeNavButton" className="nav-link" sub={item.sub} to={`/${item.id}`}>{item.name}
                </NavLink>
              </div>
            )
            })
          }
        </NavBar>

        <Route exact path="/home" component={Home} />

        <div className="sub-list">
          <Route path='/:banana' render={props => {
            return <SubNav {...props} data={appleNavData}  /> }}
          />
        </div>

        <div className="page">
          <Route path="/:banana/:apple" render=     
            {props => {
              return (
                <Page {...props} data={appleNavData} />
              ) 
            }}
          />
        </div>
        

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