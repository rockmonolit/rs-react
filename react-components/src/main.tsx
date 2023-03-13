// import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/card'
import SearchBar from './components/searchbar'
import Header from './components/header'
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Header />
    <SearchBar />
    <Card />
  </BrowserRouter>,
)
