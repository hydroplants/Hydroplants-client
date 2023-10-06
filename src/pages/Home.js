import React from "react";
import '../css/home.css';
import {io} from 'socket.io-client'

const Home = () => {
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
        <div className="div-1">Temperature: {temperature}</div>
    )
}

export default Home;