import React from 'react';
import './App.css';

// components
import Sidebar from './components/Sidebar';
import Grid from "./components/Grid";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Grid>
        <Task/>
      </Grid>
    </div>
  );
}

export default App;
