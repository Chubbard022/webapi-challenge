import React from 'react'; 
import axios from "axios";
import './App.css';
import Display from "./components/Display"

const URL = "http://localhost:5000/api/actions"


class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    axios
    .get(URL)
    .then(response => this.setState({ data: response.data }))
    .catch(error => console.log(error));
  
  }
  render(){
    // console.log(this.state.data.message)
    return (
      <div className="App">
        <Display data={this.state.data}/>
      </div>
    )
  }
}

export default App;
