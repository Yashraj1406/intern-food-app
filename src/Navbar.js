import React from 'react'
import './Navbar.css'
import { useHistory } from "react-router-dom";
function Navbar() {
const history = useHistory();

    return (
        <div className='outer-cont'>
            <div className='navbar' style={{paddingTop: "0px"}}>
                <div className='navbar-items'>
                    <img className='logo' onClick={() => {history.push('./')}} src='logo.png' alt='webpage-logo' />
                    <a className="nav-tags" href='/'>Home</a>
                    <a className="nav-tags" href='/signup'>Signup</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
