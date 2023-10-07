import './css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className='navbar'>
        <Link to="/">Hydroplants</Link>
        <ul>
            <li className='nav-list-item'>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
    </nav>
    )
}
export default Navbar;