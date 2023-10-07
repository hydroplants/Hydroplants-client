import './css/navbar.css';

export default function Navbar() {
    return <nav className='navbar'>
        <a href="/">Hydroplants</a>
        <ul>
            <li className='nav-list-item'>
                <a href="/dashboard">Dashboard</a>
            </li>
        </ul>
    </nav>
}