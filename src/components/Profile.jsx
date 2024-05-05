import '../styles/profile.css'

import myImage from '../assets/profile1.jpg';
import { LiaGithub, LiaLinkedinIn } from 'react-icons/lia';
import { RiTwitterXLine } from 'react-icons/ri';
import { IoMdMail } from 'react-icons/io';

const name ="PRATHAMESH"
const surname = "ZINGADE"

// Convert name string to array
const nameArray = name.split("");

// Convert surname string to array
const surnameArray = surname.split("");

export default function Profile(){
    return(
        <div className="profile-div" id='profile'>
            <div className="visual">
                <img src={myImage} className='profile-img' alt='This is the picture of prathamesh zingade'/>
            </div>
            <div className="textual">
                <div>
                    <h3 className='montserrat-regular namaskar'>Namaskar! Myself,</h3>
                </div>
                <div className='montserrat-bold name'>
                    <div>
                        {nameArray.map((letter, index) => (
                            <h4 className={index <= 2 ? 'white' : ''} id='glow-text' key={`name-${index}`}>{letter}</h4>
                        ))}
                    </div>
                    <div>
                        {surnameArray.map((letter, index) => (
                            <h4 className={surname.length - index <= 3 ? 'white' : ''} id='glow-text' key={`surname-${index}`}>{letter}</h4>
                        )
                        )}
                    </div>
                </div>
                <div>
                    <h3 className='montserrat-regular subtitle'>I develop applications, which looks good and perform better!</h3>
                </div>
                {connectWithMe()}
            </div>
        </div>
    )
}

export function connectWithMe(){
    return(
            <div className='social-media-icons'>
                <a  href='https://github.com/ZingadePrathamesh' target='_blank'><LiaGithub className='icon' size={30} /></a>
                <a href='https://twitter.com/prathameshz2002' target='_blank'><RiTwitterXLine className='icon' size={24}/></a>
                <a href='https://www.linkedin.com/in/prathamesh-zingade/' target='_blank'><LiaLinkedinIn className='icon' size={30} /></a>
                <a href="mailto:zingadeprathamesh12@gmail.com" target="_blank"><IoMdMail className='icon' size={30}/> </a>
            </div>
    );
}
