import React, { Component } from 'react'
import bell1 from "./bell1.png"
import bell2 from "./bell2.png"
export class NewComp extends Component {
    styles={
        fontStyle:"bold",
        color:"red"
      }
    constructor(props) {
        super(props)
    
        this.state = {
             message:"subscribe to htmlhints",
             sub:"SUBSCRIBE",
             imageUrl:bell1
        }
    }
    ButtonChange=()=>{
       this.setState({message:"Hit the bell icon for further updates",
       sub:"SUBSCRIBED"}) 
    }
    ImageChange=()=>{
        this.setState({imageUrl:bell2,message:"THANK YOU"})
    }
    render() {
        return (
            <div className="App">
                <h1 style={this.styles}>{this.state.message}</h1>
                <button onClick={this.ButtonChange} style={this.styles}>{this.state.sub}</button>
                <p/>
                <img src={this.state.imageUrl} onClick={this.ImageChange} alt="" style={{width:"30px",height:"30px"}}></img>
                
            </div>
        )
    }
}

export default NewComp
