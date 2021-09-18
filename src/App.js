import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home.js'
import Signup from './Signup.js'

function App() {
  return (
    <div className="app">
		<Router>
		<Navbar />
			<Route path='/' exact component={Home} />
			<Route path='/signup' component={Signup} />
		</Router>
	</div>
  );
}

export default App;
