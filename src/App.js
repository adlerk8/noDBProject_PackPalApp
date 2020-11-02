import React, {Component} from 'react';
import Header from './components/Header';
import MyPackList from './components/MyPackList';
import FullPackList from './components/FullPackList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPackList = [],
      fullPackList = [],
      note = ""
    }
  }

  componentDidMount() {
    axios.get('/api/MyPackList')
    .then((res) => {
      this.setState({currentPackList: res.data})
    })
    .catch((err) => console.log(err));
    axios.get('/api/FullPackList')
    .then((res) => {
      this.setState({fullPackList: res.data})
    })
    .catch((err) => console.log(err))
  }
  
  addToPack = (id) => {
    axios.post(`/api/MyPackList/${id}`)
      .then((res) => {this.setState({currentPackList: res.data })})
      .catch((err) => console.log(err));
  }

  removeFromPack = (id) => {
    axios.delete(`/api/MyPackList/${id}`)
      .then((res) => {this.setState({currentPackList: res.data})})
      .catch((err) => console.log(err));
  };

  addNote = (id) => {
    axios.post(`/api/MyPackList/${id}`, {note})
      .then((res) => {this.setState({note: res.data})})
      .catch((err) => console.log(err));
  }

  render () {
    return (
      <div>
        <Header/>
        <MyPackList currentPackList={this.state.currentPackList} removeFromPack={this.removeFromPack}/>
        <FullPackList fullPackList={this.state.fullPackList} addToPack={this.addToPack}/>
      </div>
    );
  }
}


export default App;
