import React from 'react'
import '../free/new.css'

import{
    Link
    } from "react-router-dom";

const List = () => {
    return (
        <div>
            
            <div className="random">
                <ul>
                    <li><Link to="/friend"style={{textDecoration: 'none',color:'white'}}>Home</Link> </li>
                    <li><Link to="/homelist"style={{textDecoration: 'none',color:'white'}}>Friend Request</Link> </li>
                    <li><Link to="/Notifications"style={{textDecoration: 'none',color:'white'}}>Notifications</Link> </li>
                    <li><Link to="/suggestion"style={{textDecoration: 'none',color:'white'}}>My Profile</Link> </li>
                    <li><Link to="/Messanger"style={{textDecoration: 'none',color:'white'}}>Messanger</Link> </li>
                    <li><Link to="/Login"style={{textDecoration: 'none',color:'white'}}>Login</Link> </li>
                    <li><Link to="/Logout"style={{textDecoration: 'none',color:'white'}}>Logout</Link> </li>
                    <li><Link to="/Videos"style={{textDecoration: 'none',color:'white'}}>Videos</Link> </li>
                    <li><Link to="/Settings"style={{textDecoration: 'none',color:'white'}}>Settings</Link> </li>
                    <li><Link to="/Saved"style={{textDecoration: 'none',color:'white'}}>Saved</Link> </li>
                    <li><Link to="/About"style={{textDecoration: 'none',color:'white'}}>About</Link> </li>
                    <li><Link to="/Contact"style={{textDecoration: 'none',color:'white'}}>Contact</Link> </li>
                    <li><Link to="/Service"style={{textDecoration: 'none',color:'white'}}>Service</Link> </li>
                    <li><Link to="/Security"style={{textDecoration: 'none',color:'white'}}>Security</Link> </li>
                    <li><Link to="/Apps"style={{textDecoration: 'none',color:'white'}}>Apps</Link> </li>





                    
                </ul>
            </div>
        </div>
    )
}

export default List


 