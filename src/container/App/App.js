import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function createAndDownloadFile(fileName, content) {
  var aTag = document.createElement('a');
  var blob = new Blob([content]);
  aTag.download = fileName;
  aTag.href = URL.createObjectURL(blob);
  aTag.click();
  URL.revokeObjectURL(blob);
}

class App extends Component {
  uploadFile(e) {
    console.log(this)
    console.log(e)
    const file = this.refs.input.files[0]
    const reader = new FileReader();
    reader.onload = function(e) {
      var data = JSON.parse(e.target.result);
      data.bcd = "hello, world"
      createAndDownloadFile('bcd.json', JSON.stringify(data))
    }
    reader.readAsText(file)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input ref="input" type="file" onChange={ e => this.uploadFile(e)}/>
      </div>
    );
  }
}

export default App;
