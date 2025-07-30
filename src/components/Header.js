import { useState } from "react";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header-container">
            <div className="app-logo">
                <img src="./app_logo.png" alt="app-logo" />
            </div>
            <div className="nav_bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="header-btn" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")} >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;