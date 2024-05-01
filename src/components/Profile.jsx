import '../styles/profile.css'

import myImage from '../assets/profile1.jpg';
import { LiaGithub, LiaLinkedinIn } from 'react-icons/lia';
import { RiTwitterXLine } from 'react-icons/ri';
import { IoMdMail } from 'react-icons/io';

export default function Profile(){
    const name ="PRATHAMESH"
    const surname = "ZINGADE"

    // Convert name string to array
    const nameArray = name.split("");

    // Convert surname string to array
    const surnameArray = surname.split("");

    return(
        <div className="profile-div">
            <div className="visual">
                <img src={myImage} className='profile-img' alt='prathamesh zingade'/>
            </div>
            <div className="textual">
                <div>
                    <h3 className='montserrat-regular namaskar'>Namaskar! Myself,</h3>
                </div>
                <div className='montserrat-bold name'>
                    <div>
                        {nameArray.map((letter, index) => {
                            if (index <= 2) {
                                return <h1 className='white' id='glow-text'>{letter}</h1>; // Return JSX element
                            } else {
                                return <h1 id='glow-text'>{letter}</h1>; // Return JSX element
                            }
                        })}
                    </div>
                    <div>
                        {surnameArray.map((letter, index) => {
                            if(surname.length-index <= 3) return <h1 className='white' id='glow-text'>{letter}</h1>
                            else return <h1 id='glow-text'>{letter}</h1>
                        }
                        )}
                    </div>
                </div>
                <div>
                    <h3 className='montserrat-regular subtitle'>I develop applications, which looks good and perform better!</h3>
                </div>
                <div className='social-media-icons'>
                    <a  href='https://github.com/ZingadePrathamesh' target='_blank'><LiaGithub className='icon' size={30} /></a>
                    <a href='https://twitter.com/prathameshz2002' target='_blank'><RiTwitterXLine className='icon' size={24}/></a>
                    <a href='https://www.linkedin.com/in/prathamesh-zingade/' target='_blank'><LiaLinkedinIn className='icon' size={30} /></a>
                    <a href='' target='_blank'><IoMdMail className='icon' size={30}/> </a>
                </div>
            </div>
        </div>
    )
}