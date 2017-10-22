import React, { Component } from 'react';
import WorkoutDetail from './workout-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav style={{backgroundColor:'black'}} className="navbar navbar-expand-lg navbar-dark container-fluid">
          <i style={{color:'white'}} className="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
          &emsp;
          <a style={{color:'white'}} className="navbar-brand"> Workout Manager</a>
        </nav>
        <br/> 
        <WorkoutDetail/>    
      </div>
    );
  }
}
