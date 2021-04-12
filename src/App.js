import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

import Sidebar from './Components/Sidebars/Sidebar';
import { useState } from 'react';
import { HomePage } from './Components/HomePage/HomePage';
import {pic} from '../src/Components/Data'
import AboutPage from './Components/AboutPage/AboutPage';
import { VM } from './Components/VM/VM';
import { ThemeConsumer } from 'styled-components';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { Projects } from './Components/Projects/Projects';
import { Donate } from './Components/Donate/Donate';
import { Contact } from './Components/ContactPage/Contact';
import Navbar1 from './Components/Navbar1/Navbar1';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  constructor(){
    super()
    this.state={
      isOpen:false,
      isModal:true
    }


  }





  toggle=()=>{
    let a = this.state.isOpen
    this.setState({
      isOpen:!a
    })
  }

  toggle1=()=>{
    let S = this.state.isModal
    this.setState({
      isModal:!S
    })


  
  }
render(){




  return (

    <>



   <Sidebar isOpen={this.state.isOpen} toggle={this.toggle}/>

<Navbar toggle={this.toggle} />

<HomePage   {...pic} toggle1={this.toggle1} isModal = {this.state.isModal}{...pic}/>

<AboutPage {...pic}/>


<Projects {...pic}/>
<Donate/>
<Contact/>







    </>
   
  );




}
  
}

export default App;
