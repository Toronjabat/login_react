import { useState,useEffect} from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import io from 'socket.io-client';
import { Login } from './components/Login';

//const socket = io('http://localhost:4000')


function App() {

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{
    body: "message test",
    from: "user1"
  }])

  /* const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', message)
    setMessage('')
  }

  useEffect(() => {

    const receiveMessage = message => {
      console.log("message: ", message)
    };
    socket.on('broadcast-message', receiveMessage);

    return () => {
      socket.off('message', receiveMessage);
    };

  }, []); */

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