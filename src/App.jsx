import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Post from './Components/Post';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/post' element={<Post/>}/>      
    </Routes>
    </BrowserRouter>
  )
}
