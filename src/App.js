
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {

  Routes,
  Route,

} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

const apiKey= process.env.REACT_APP_NEWS_API;;
export default class App extends Component {
  
  render() {
    return (

      <Router>
        
        <Navbar/>
        <Routes>
        
        
    
        <Route path ="/" element={<News pageSize={6} apiKey={apiKey} country={"in"} cat="general"/>} />
        <Route path ="/general" element={<News pageSize={6} apiKey={apiKey} country={"in"} cat="general"/>} />
        <Route path ="/business" element={<News pageSize={6} apiKey={apiKey} country={"in"} cat="business"/>} />
        <Route path ="/entertainment" element={<News pageSize={6} apiKey={apiKey} country={"in"} cat="entertainment"/>} />
        <Route path ="/health" element={<News pageSize={6} apiKey={apiKey} country={"in"} cat="health"/>} />
        <Route path ="/science" element={<News pageSize={6} apiKey={apiKey} country={"in"} cat="science"/>} />
        <Route path ="/sports" element={<News pageSize={6} apiKey={apiKey} country={"in"} cat="sports"/>} />
        <Route path ="/technology" element={<News pageSize={6} apiKey={apiKey} country={"in"} cat="technology"/>} />
        {/* <Route path ="/general" element={<News pageSize={6} apiKey={this.apiKey}} country={"in"} category="general"/>} /> */}

        
      
        </Routes>
        
      </Router>

    
    
       
   
  
    )
  }
}


