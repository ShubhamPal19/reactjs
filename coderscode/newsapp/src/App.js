
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Spinner from './components/Spinner';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
   pagesize =5
  //  apiKey="65dc695fb5a8455ebed0ac88f95fbc29"
   apiKey=process.env.REACT_APP_NEWS_API

   state = {
     progress:0
   }
  

   setProgress = (progress)=> {

    this.setState({progress:progress})
   }
  render() {

    return (
      <div>
        <Router>
        
        <Navbar/>

        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Routes>

        <Route path="/"           element={  <News setProgress ={this.setProgress} apiKey={this.apiKey} key="general"  country='in' pageSize= {this.pagesize} category = "general"/>} />
        <Route path="/science"    element={  <News setProgress ={this.setProgress} apiKey={this.apiKey} key = "science" country='in' pageSize={this.pagesize} category = "science"/>} />
        <Route path="/business"   element={  <News setProgress ={this.setProgress} apiKey={this.apiKey} key = "business" country='in' pageSize={this.pagesize} category = "business"/>} />
        <Route path="/entertainment" element={  <News setProgress ={this.setProgress} apiKey={this.apiKey} key="entertainment" country='in' pageSize={this.pagesize} category = "entertainment"/>} />
        <Route path="/sports" element={  <News setProgress ={this.setProgress} apiKey={this.apiKey} key = "sports" country='in' pageSize={this.pagesize} category = "sports"/>} />
        <Route path="/technology" element={  <News setProgress ={this.setProgress} apiKey={this.apiKey}  key = "technology" country='in' pageSize={this.pagesize} category = "technology"/>} />
        <Route path="/health" element={  <News setProgress ={this.setProgress} apiKey={this.apiKey} key = "health" country='in' pageSize={this.pagesize} category = "health"/>} />


        </Routes>
        </Router>
      </div>
    )
  }
}
