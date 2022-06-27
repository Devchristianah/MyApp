
const Validation=(props)=>{
    let validationMessage="TEXT TOO SHORT"
    
    if(props.inputLength >=5){
        validationMessage ='TEXT LONG ENOUGH'
    }
    return(
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}





export default Validation;