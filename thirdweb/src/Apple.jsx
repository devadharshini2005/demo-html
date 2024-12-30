import {useState} from "react";

function Apple(props){
    let [Name,SetName]=useState(props.name);
    
        return(
        
            <h1>
            <input type="text" value={Name} onChange={(event)=>SetName(event.target.value)}/>
            <br/>
                HI This is {Name}</h1>
                
        )
    }

export default Apple;