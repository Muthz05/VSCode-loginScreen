import React, { Component } from 'react';
import './App.css';
import LoginBox from './component/LoginBox';
import RegisterBox from './component/RegisterBox';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
        <div className="root-container">
          <div className="box-controller">
            <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")}
               onClick={this.showLoginBox.bind(this)}>Login
            </div>
            <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")}
               onClick={this.showRegisterBox.bind(this)}>Register
            </div>
          </div>
          <div className="box-container">
            {this.state.isLoginOpen && <LoginBox/>}
            {this.state.isRegisterOpen && <RegisterBox/>}
          </div> 
      </div>
        </header>
      </div>
    );
  }
}

export default App;
