import { LiaBarsSolid, LiaTimesSolid } from "react-icons/lia";
import '../styles/navbar.css';
import { useState } from "react";
import { Link } from "react-scroll";


export default function Navbar(){
    const [menuClicked, setMenuClicked] = useState(false);

    return(
            <nav>
                <div className="nav-left">
                    <ul className= {menuClicked ? "nav-left-ul active" : "nav-left-ul"}>
                        <li>
                            <Link to="profile" spy={true} smooth={true} offset={50} duration={500} className="nav-link">HOME</Link>
                        </li>
                        <li>
                            <Link to="project" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500} isDynamic={true} className="nav-link">PROJECTS</Link>
                        </li>
                        <li><Link to="services" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500} isDynamic={true} className="nav-link">SERVICES</Link></li>
                        <li><Link to="skills" spy={true} smooth={true} hashSpy={true} offset={-50} duration={500} isDynamic={true} className="nav-link">SKILLS</Link></li>
                        <li><Link to="stats" spy={true} smooth={true} hashSpy={true} offset={-40} duration={500} isDynamic={true} className="nav-link">STATS</Link></li>
                        <li className="connect-btn-li"><a href="mailto:zingadeprathamesh12@gmail.com" className="nav-link connect-lft-btn">CONNECT</a></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <button className="connect-btn"><a href="mailto:zingadeprathamesh12@gmail.com" className="connect-btn-a">CONNECT</a></button>
                    {!menuClicked && <LiaBarsSolid color="#F2613F" className="menu-icon" size={40} onClick={()=>{setMenuClicked(!menuClicked)}}/>}
                    {menuClicked && <LiaTimesSolid color="#FFFFFF" className="menu-icon active" size={40} onClick={()=>{setMenuClicked(!menuClicked)}} />}
                </div>
            </nav>
    )
}