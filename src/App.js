import React, {Component} from 'react';
import Header from './components/Header';
import MyPackList from './components/MyPackList';
import FullPackList from './components/FullPackList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPack = []
    }
  }

  componentDidMount() {
    axios.get('/api/MyPackList')
    .then((res) => {
      this.setState({currentPack: res.data})
    })
    .catch((err) => console.log(err));
  }
  
  addToPack(id) {
    axios.post(`/api/MyPackList/${id}`)
      .then((res) => {this.setState({ team: res.data })})
      .catch((err) => console.log(err));
  }

  removeFromPack = (index) => {
    axios.delete(`/api/MyPackList/${index}`)
      .then((res) => {this.setState({team: res.data})})
      .catch((err) => console.log(err));
  };

  render () {
    return (
      <div>
        <Header/>
        <MyPackList currentPack={this.currentPack} removeFromPack={this.removeFromPack}/>
        <FullPackList addToPack={this.addToPack}/>
      </div>
    );
  }
}


export default App;
