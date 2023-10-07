import React from "react";
import './home.css';

const Home = () => {
    
    const [temperature, setTemperature] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://flowing-aware-kangaroo.ngrok-free.app/api/data/', {
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': '654789'
                    }
                });
                console.log(response);
                const data = await response.clone().json();
                console.log(data.temperature);
                setTemperature(data.temperature);
            } catch (error) {
                console.error('Error fetching live data:', error);
            }
        };

        const interval = setInterval(fetchData, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="home-head">
                <h1>Welcome</h1>
            </div>
        </div>
    )
}

export default Home;
//https://flowing-aware-kangaroo.ngrok-free.app/api/data
//"homepage": "https://hydroplants.github.io/Hydroplants-client",