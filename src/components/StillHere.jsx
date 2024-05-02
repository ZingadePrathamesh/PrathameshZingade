import { GiDividedSpiral } from 'react-icons/gi';
import '../styles/still-here.css';
import { connectWithMe } from './Profile';
import '../styles/profile.css'

export default function StillHere(){
    const stillhere = "STILL HERE?"
    const stillHere = stillhere.split('')
    return(
        <div className="still-here">
            <div className='still-here-heading'>
                {
                    stillHere.map((letter, index)=>{
                        if (letter === ""|| index === 5) {
                            return <h2 className='still-here-head'>&#8201;</h2>
                        }
                        else{
                            return <h2 className={(index<5 || index === stillHere.length-1)? "still-here-head montserrat-extra-bold":"still-here-white montserrat-extra-bold"}>{letter}</h2>
                        }
                    })
                }
            </div>
            <h2 className='still-here-subhead montserrat-bold'>Thank you for taking the time to explore my portfolio.</h2>
            <div className='still-here-bottom'>
                <h4 className='montserrat-regular still-here-text'>At the heart of my work lies a dedication to continuous learning and improvement. Whether it's tackling LeetCode challenges to sharpen my problem-solving abilities or collaborating on projects that push the boundaries of innovation, I strive to deliver solutions that resonate with excellence.</h4>
                <div className='spiral-icons'>
                    <GiDividedSpiral className='spirals'/> 
                    <GiDividedSpiral className='spirals'/> 
                    <GiDividedSpiral className='spirals'/> 
                </div>
                <h4 className='montserrat-regular still-here-text'>I'm always eager to explore potential collaborations and opportunities to leverage my skills for impactful projects. Whether you're seeking a talented developer to join your team or looking to collaborate on a new venture, I'm here to discuss how we can work together to bring your vision to life.</h4>
            </div>
            <div className='connect-div'>
                {connectWithMe()}
            </div>
        </div>
    );
}