import React, { Component } from 'react';
import {  Route, NavLink } from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import appleNavData from './apple-nav-data.js' ;
import Page from './page.js' ;
import SubNav from './subNav.js' ;

class App extends Component {
  render(props) {
    return (
      <div className="app">
        <NavBar>
        {appleNavData.map( item => {
          // console.log(item.sub);
      
          return (
            <div>
              <NavLink key={item.id} activeClassName="activeNavButton" className="nav-link" sub={item.sub} to={`/${item.name.toLowerCase()}`}>{item.name}
            </NavLink>
           
            </div>
          )
        })}

       
      </NavBar>
      
      
      {appleNavData.map(item => {
          console.log(item.name)
         return item.sub.map( item => {
            return <SubNav {...item} key={item.id} to={`/${item.name.toLowerCase()}`}>{item.name}</SubNav>
          })
        })}
      

     

      <Route path='/:name' render={props => ( 
        <Page className="page" {...props} key={props.id} />
    
      )} />
      </div>
      
    );
  }
}

export default App;

const NavBar = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  background-color: black;
`;