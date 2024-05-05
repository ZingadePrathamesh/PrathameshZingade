import '../styles/skills.css';
import skills from '../assets/skills.svg';

export default function Skills(){
    const subtitle = "if you are looking for someone with the below mentioned skills, your search ends here!"
    return(
    <div className="skills" id='skills'>
        <h2 className="skills-subtitle montserrat-regular">{subtitle}</h2>
        
        <div className='skills-collage'>
            <div className='skills-left'>
                <div className='first-div'>
                    <div className='cell fidc'>MANAGEMENT</div>
                    <div className='cell fidc'>COMMUNICATION</div>
                    <div className='cell fidc white-cell'>PHOTOSHOP</div>
                    <div className='cell fidc'>CONTENT WRITING</div>
                </div>
                <div className='second-div'>
                    <div className='cell sedc white-cell'>DOCKER</div>
                    <div className='cell js'>JAVASCRIPT</div>
                    <div className='cell sedc white-cell'>REST</div>
                </div>
            </div>
            
            <div className='third-div'>
                {
                    "SKILLS".split('').map((letter, index)=>(
                        <h2 key={index} className={index<3 ?"montserrat-extra-bold skills-white" : "montserrat-extra-bold skills-letter" }>{letter}</h2>
                    ))
                }
            </div>
            <div className='skills-right'>
                <div className='fourth-div'>
                    <div className='cell sedc'>REACT</div>
                    <div className='cell db white-cell'>MYSQL<br/>MONGODB<br/>FIREBASE</div>
                    <div className='cell sedc'>SPRINGBOOT</div>
                </div>
                <div className='fifth-div'>
                    <div className='cell js'>JAVA</div>
                    <div className='cell fidc white-cell'>OOPS</div>
                    <div className='cell fidc white-cell'>DSA</div>
                    <div className='cell fidc'>UI/UX</div>
                    <div className='cell fidc'>CANVA</div>
                </div>
            </div>
            
        </div>


    </div>
    );
}