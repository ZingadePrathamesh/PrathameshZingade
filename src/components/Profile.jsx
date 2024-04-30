import '../styles/profile.css'

import myImage from '../assets/profile1.jpg';

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
                <div>

                </div>
            </div>
        </div>
    )
}