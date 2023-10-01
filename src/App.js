import './App.css';
import Temperatures from './components/Temperatures';
import React from 'react';
import {io} from 'socket.io-client'

//function App() {
//  return (
//    <Temperatures />
//  );
//}

function App() {
  const [temperature, setTime] = React.useState('fetching')  
  React.useEffect(()=>{
    const socket = io('http://localhost:9002')
    socket.on('connect', ()=>console.log(socket.id))
    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),9002)
    })
   socket.on('temperature', (data)=>setTime(data))
   socket.on('disconnect',()=>setTime('server disconnected'))
 
 },[])
 return (
    <div class="div-1">
      Temperature: {temperature} C
    </div>
 )
}

export default App;
