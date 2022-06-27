import React from "react";

const Char=(props) =>{


    const style = {
        display:'inline-block',
        margin:'16px',
        padding:'16px',
        textAlign:'center',
        border:'1px solid black'
    }
    return(
        <div style ={style} onClick ={props.clicking}>
            {props.character}
        </div>
    )
        
}

export default Char;