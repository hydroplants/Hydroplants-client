import React from "react";
import '../css/dashboard.css';

const Dashboard = () => {
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
            <div className="dash-heading"><h1>Dashboard</h1></div>
            <div className="div-1">
                Temperature: {temperature}
            </div>
        </div>
    )
}

export default Dashboard;