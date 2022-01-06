
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Spinner from './components/Spinner';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
   pagesize =5
  c= 'john'
  render() {
    return (
      <div>
        <Router>
        
        <Navbar/>

        <Routes>
``````
        <Route path="/"           element={  <News key="general"  country='in' pageSize= {this.pagesize} category = "general"/>} />
        <Route path="/science"    element={  <News key = "science" country='in' pageSize={this.pagesize} category = "science"/>} />
        <Route path="/business"   element={  <News key = "business" country='in' pageSize={this.pagesize} category = "business"/>} />
        <Route path="/entertainment" element={  <News key="entertainment" country='in' pageSize={this.pagesize} category = "entertainment"/>} />
        <Route path="/sports" element={  <News key = "sports" country='in' pageSize={this.pagesize} category = "sports"/>} />
        <Route path="/technology" element={  <News  key = "technology" country='in' pageSize={this.pagesize} category = "technology"/>} />
        <Route path="/health" element={  <News key = "health" country='in' pageSize={this.pagesize} category = "health"/>} />


        </Routes>
        </Router>
      </div>
    )
  }
}
