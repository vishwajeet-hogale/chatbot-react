import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/Header'
import Message from './components/Message'
class App extends React.Component{
  render(){
  return (
    <div className="App">
      <Header></Header>
      <Message/>
    </div>
  );
  }
}

export default App;
