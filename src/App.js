//import logo from './logo.svg';
import './App.css';

import React from "react"
import NewComp from "./components/NewComp"
 class App extends React.Component{
   styles={
     fontStyle:"bold",
     color:"teal"
   }
   render(){
     return(
                 <div className="App">
                   <h1 style={this.styles}> HI</h1>
                   <NewComp></NewComp>
                 </div>
     )
   }
 }

export default App;
