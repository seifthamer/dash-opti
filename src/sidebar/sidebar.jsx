import React, { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
// import BG from '/images/Background.png';


const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const currentPath = window.location.pathname;
    const menuItemClass = (path) => {
        return `menu-item ${currentPath === path ? 'active' : ''}`;
    };

    return (
        
 <div className="sidebar">
          <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-logo">
            <button className="hamburger" onClick={toggleSidebar}>
                ☰ {}
            </button>
                <img src="./images/logo.svg" alt="Optilearn Education" />
            </div>
            <div className="sidebar-menu">
            <div className={menuItemClass('/dashboard')}>             
                   <Link to={'/'}><img src="./images/home.png" alt="Dashboard" className="icon" />Dashboard</Link>
                </div>
                <div className={menuItemClass('/etudiant')}>             
                    <Link to={'/etudiant'}><img src="./images/student.png" alt="Étudiants" className="icon" />Étudiants</Link>
                </div>

                <div className={menuItemClass('/formateur')}>
                    <Link to={"/formateur"}><img src="./images/Billing.png" alt="Formateurs" className="icon" />Formateurs</Link>
                </div>

                <div className={menuItemClass('/Courses')}>
                    <Link to={"/Courses"}><img src="./images/cours.png" alt="Cours" className="icon" />Cours</Link>
                </div>

                <div className={menuItemClass('/billing')}>
                    <Link to="/billing"><img src="./images/billing.png" alt="Billing" className="icon" />Billing</Link>
                </div>

                <div className={menuItemClass('/blog')}>
                    <Link to="/blog"><img src="./images/blog.png" alt="Blog" className="icon" />Blog</Link>
                </div>
            </div>
            <div className="sidebar-account">
                <h5 className='acc-title'>ACCOUNT PAGES</h5>
                <div className={menuItemClass('/profile')}>
                    <a href="/profile"><img src="./images/person.png" alt="Profile" className="icon" />Profile</a>
                </div>
                <div className={menuItemClass('/login')}>
                    <Link to={"/login"}><img src="./images/sign.png" alt="Sign In" className="icon" />Sign In</Link>
                </div>
            </div>
            <div className="sidebar-help" style={{ backgroundImage: `url(./images/Background.png)` }}>   
            <img src="./images/icon.png" alt="icon" className="icon" />
         
                <p className="help-item">Need help?<br/>Please check our docs</p>
                <a href="/docs" className="help-item"><button className="help-button">Documentation</button></a>
            </div>
        </div>
        </div>
        
    );
};

export default Sidebar;