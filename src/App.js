import React, {Component} from 'react';
import Header from './components/Header';
import MyPackList from './components/MyPackList';
import FullPackList from './components/FullPackList';
import './App.css';

class App extends Component {
  
  render () {
    return (
      <div>
        <Header/>
        <MyPackList/>
        <FullPackList/>
      </div>
    );
  }
}


export default App;
