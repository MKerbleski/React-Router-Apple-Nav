

import React, { Component, Fragment } from 'react';



function SubNav(props) {
    console.log(props)
    return (
        <div className="sub-nav">
           {props.children}
        </div>
    )
 }
    

export default SubNav;