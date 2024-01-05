import { Helmet } from 'react-helmet-async';
import './style.css'

const Navbar = () => {
    const body = document.querySelector('#navbar');
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    const mobileButton = document.querySelector('.mobile-btn');
    const handleMobileButton = () => {
        navMenu.classList.add('active')
        mobileButton.classList.add('hidden')
        body.classList.add('disabled-scroll')
    }

    const handleCloseMobileButton = () => {
        navMenu.classList.remove('active')
        mobileButton.classList.remove('hidden')
        body.classList.remove('disabled-scroll')
    }

    window.onscroll = () => {
        this.scrollY > 100 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky')
    }

    const navItems = <>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#services">Services</a>
        </li>
        <li>
            <a href="#marketing">Marketing</a>
        </li>
        <li>
            <a href="#">Contact Us</a>
        </li>
        <li className="nav-btn">
            <a href="#">Sign Up</a>
        </li>
    </>
    return (
        <div id="navbar">
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </Helmet>
            <nav className="navbar">
                <div className="nav-content">
                    <div className="logo"><a href="#">MHPS</a></div>
                    <ul className="nav-menu">
                        <div onClick={handleCloseMobileButton} className="icon-menu close-mobile-btn">
                            <i className="fa fa-times"></i>
                        </div>
                        {navItems}
                    </ul>
                    <div onClick={handleMobileButton} className="icon-menu mobile-btn">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;