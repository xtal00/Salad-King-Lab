import './App.css';
import {Component} from 'react';

export default class App extends Component {
  state = {
    level: 1,
    status: 'Nice',
    statusColor: 'black'
  };
  updateLevel = (incomingLevel) => {
    let newLevel = this.state.level;
    let newStatus = this.state.status;
    let newStatusColor = this.state.statusColor
    newLevel += incomingLevel
    if (newLevel < 1 || newLevel > 25) {
      return;
    }

    if (newLevel <= 2) {
      newStatus = "Nice";
      newStatusColor = "black";
    } else if (newLevel <= 4) {
      newStatus = "Start mopping your brow";
      newStatusColor = "green";
    } else if (newLevel <= 9) {
      newStatus = "Watch out";
      newStatusColor = "pink";
    } else if (newLevel <= 14) {
      newStatus = "Are you sure?";
      newStatusColor = "orange";
    } else if (newLevel <= 19) {
      newStatus = "Some like it hot";
      newStatusColor = "brown";
    } else if (newLevel <= 25) {
      newStatus = "May cause stomach upset";
      newStatusColor = "red";
    } 
    this.setState(
      {
        level:newLevel,
        status: newStatus,
        statusColor: newStatusColor,
      }
    );
  }


  
  render(){
  return (
    <div className="App">
      <h1>🌶️ Salad King Pepper Chart SPA</h1>
      <button onClick={() => this.updateLevel(1)}>Add Some Heat</button>
      <button onClick={() => this.updateLevel(-1)}>Cool It Off</button>
      <h2 >
        Spice Level:{this.state.level}
      </h2>
      <h2 style={{color: this.state.statusColor}}>
        Status: {this.state.status}
      </h2>
    </div>
    );
  }
}



