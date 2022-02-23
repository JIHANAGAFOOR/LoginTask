import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useToken from './useToken';
function App() {
  const {token,setToken}=useToken();
  if(!token){
    return <Login  setToken={setToken}/>
  }
 
 
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}>  </Route>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
