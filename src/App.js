import React from 'react';
import { Navbar } from './Navbar.js'
import HomePage from './HomePage.js'
import { Route, Link } from 'react-router-dom'

function App() {
    return(
        <>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/' component={Navbar}/>
        <Route exact path='/add-data' component={Navbar}/>
        </>
    );
}

export default App;