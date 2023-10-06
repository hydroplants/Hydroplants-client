import React from "react";
import '../css/home.css';
import {io} from 'socket.io-client'

const cors = require('cors');

const Home = () => {
    
    const [temperature, setTemperature] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/data');
                const data = await response.json();
                setTemperature(data.temperature);
            } catch (error) {
                console.error('Error fetching live data:', error);
            }
        };

        const interval = setInterval(fetchData, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="div-1">Temperature: {temperature}</div>
    )
}

export default Home;