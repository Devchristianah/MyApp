import { Component } from 'react';
import './App.css';
import Validation from'./Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state={
    userInput:''
  }

  inputChangedHandler=(event)=>{
    this.setState({
      userInput:event.target.value
    })
  }
  deleteCharHandler =(index)=>{
    const gattuso =this.state.userInput.split('');
    gattuso.splice(index,1)
    const update= gattuso.join('')
    this.setState({ 
      userInput:update
    })
  }
 render(){
  const charList = this.state.userInput.split('').map((ch, index)=>{
    return <Char character= {ch} key={index} clicking={()=>this.deleteCharHandler(index)}></Char>
  })
  
  return(
  <div className="App">
    <input type="text" onChange ={this.inputChangedHandler}></input>
    <h1>{this.state.userInput.length}</h1>
    <Validation inputLength = {this.state.userInput.length}></Validation>
    {charList}
  </div>
 );
 }
}

export default App;
