import React, { Component } from 'react';
import logo_img from './img/logo-drive.png'
import './App.css';
import Form from "./Form";



class App extends Component {

  render() {
    return (
        <div className={"sign_up"}>
            <div className={"sign_up_title"}>
                <img src={logo_img} alt={"sd"}/>
                <span>Cloud_Inssa</span>
            </div>
            <div className={"sign_up_ex"}>
                <span>Create your Cloud_Inssa Account</span>
            </div>
            <Form/>
        </div>
    );
  }
}

export default App;
