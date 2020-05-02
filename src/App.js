import React, { Component } from 'react';
import Movies from './Components/Movies.jsx'
import './App.css'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <main className="container">
                <Movies />
            </main>
         );
    }
}
 
export default App;