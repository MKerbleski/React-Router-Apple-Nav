

import React from 'react';


function Page(props) {
    console.log(props.match.params.sub, props.data[2].sub[1].name);
    return (
        <div>
            
            {props.data[2].sub[0].name} page
        
            
        </div>
    )
 }
    

export default Page;