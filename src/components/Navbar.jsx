import { LiaBarsSolid } from "react-icons/lia";
import '../styles/navbar.css';


export default function Navbar(){
    return(
            <nav>
                <div className="nav-left">
                    <ul>
                        <li>HOME</li>
                        <li>PROJECTS</li>
                        <li>SERVICES</li>
                        <li>SKILLS</li>
                        <li>STATS</li>
                    </ul>
                </div>
                <div className="nav-right">
                    <button>CONNECT</button>
                    <LiaBarsSolid color="#F2613F" className="menu-icon"/>
                </div>
            </nav>
    )
}