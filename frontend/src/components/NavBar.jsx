import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Assuming you have defined styles in NavBar.css

const NavBar = () => {
    const handleBackClick = () => {
        const userConfirmed = window.confirm("Do you want to go back to login page?");
        if (userConfirmed) {
            window.location.href = "http://localhost:3001/login"; // Replace with your desired URL
        }
    };

    return (
        <div className='top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#" onClick={handleBackClick}>LAW ASSISTANT</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/AboutUs">About Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Students
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/famous">Famous cases</Link></li>
                                    <li><Link className="dropdown-item" to="/assist">Research assistant</Link></li>
                                    <li><Link className="dropdown-item" to="/news">news</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/chatbot">chatbot</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
