import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import navigationList from '../../utils/navigationList'

import './Reset.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation navigationList={navigationList.cities}/>
        </header>
      </div>
    )
  }
}

export default App
