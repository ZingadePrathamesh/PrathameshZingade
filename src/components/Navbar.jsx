import { LiaBarsSolid, LiaTimesSolid } from "react-icons/lia";
import '../styles/navbar.css';
import { useState } from "react";


export default function Navbar(){
    const [menuClicked, setMenuClicked] = useState(false);


    return(
            <nav>
                <div className="nav-left">
                    <ul className= {menuClicked ? "nav-left-ul active" : "nav-left-ul"}>
                        <li>HOME</li>
                        <li>PROJECTS</li>
                        <li>SERVICES</li>
                        <li>SKILLS</li>
                        <li>STATS</li>
                        <li className="connect-btn-li">CONNECT</li>
                    </ul>
                </div>
                <div className="nav-right">
                    <button className="connect-btn">CONNECT</button>
                    {!menuClicked && <LiaBarsSolid color="#F2613F" className="menu-icon" size={40} onClick={()=>{setMenuClicked(!menuClicked)}} tra/>}
                    {menuClicked && <LiaTimesSolid color="#F2613F" className="menu-icon" size={40} onClick={()=>{setMenuClicked(!menuClicked)}} />}
                </div>
            </nav>
    )
}