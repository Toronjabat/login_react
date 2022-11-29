import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Login } from './components/Login';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Login/>}/>
     </Routes>
     </BrowserRouter>
     </div>
  ); 
}
export default App;