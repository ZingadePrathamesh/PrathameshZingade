import '../styles/project.css';

export default function Project(){
    // function toggleClass(){
    //     const h2Elements = document.querySelectorAll('.project-third h2');
    //     const h3Elements = document.querySelectorAll('.project-second h2');
    //     const h4Elements = document.querySelectorAll('.project-first h2');
    //     const counter = h2Elements.length;

    //     for (let index = 0; index < counter; index++) {
    //         setTimeout(() => {
    //             h2Elements[index].classList.add('glow');
    //             h3Elements[index].classList.add('glow');
    //             h4Elements[index].classList.add('glow');
    //             if (index === 0) {
    //                 h2Elements[counter - 1].classList.remove('glow');
    //                 h3Elements[counter - 1].classList.remove('glow');
    //                 h4Elements[counter - 1].classList.remove('glow');
    //             } else {
    //                 h2Elements[index - 1].classList.remove('glow');
    //                 h3Elements[index - 1].classList.remove('glow');
    //                 h4Elements[index - 1].classList.remove('glow');
    //             }
    //         }, index * 200); // 1 second delay for each iteration
    //     }
    // }

    // useEffect(()=>{
    //     const animationLoop = () => {
    //         setInterval(() => {
    //             toggleClass()
    //         }, 1400);
    //       };
    //       animationLoop(); // Start the animation loop initially
    //       return () => clearInterval(animationLoop);
    // }, [])

    const projectTitles = ["Green Harbour", "Event Management", "Groove", "Tic Tac Toe" ]
    const projectSubtitles = ["A collaborative platform for Tree plantation enthusiasts for a better tomorrow.",
        "A event management platform for teams and event managers to organise and distribute the work.",
        "A music player app that can play the musics stored in the mobile storage",
        "A Game which could be played on the browser with zero lag."
    ]
    const projectImg = [

    ]
    return(
        <div className="project" id='project'>
            <div className="project-left">
                    <div className='project-first'>
                        {
                            "PROJECT".split('').map((letter, index)=>(
                                <h2 key={index} className={index<3 ?"montserrat-extra-bold project-white" : "montserrat-extra-bold project-letter" }>{letter}</h2>
                            ))
                        }
                    </div>
                    <div className='project-second'>
                        {
                            "PROJECT".split('').map((letter, index)=>(
                                <h2 key={index} className={index<3 ?"montserrat-extra-bold project-white" : "montserrat-extra-bold project-letter" }>{letter}</h2>
                            ))
                        }
                    </div>
                    <div className='project-third'>
                        {
                            "PROJECT".split('').map((letter, index)=>(
                                <h2 key={index} className={index<3 ?"montserrat-extra-bold project-white" : "montserrat-extra-bold project-letter" }>{letter}</h2>
                            ))
                        }
                    </div>              
            </div>
            <div className="project-middle">
                    <div className='grid-container montserrat-regular'>
                        <div className='project1'>
                            <div className='back'>
                                <h1 className='project-title'>{projectTitles[0]}</h1>
                                <h4 className='project-subtitle'>{projectSubtitles[0]}</h4>
                            </div>
                        </div>
                        <div className='project2'>
                            <a className='back' href='https://github.com/ZingadePrathamesh/Event-Management-Web-Application' target='_blank'>
                                <h1 className='project-title'>{projectTitles[1]}</h1>
                                <h4 className='project-subtitle'>{projectSubtitles[1]}</h4>
                            </a>
                        </div>
                        <div className='project3'>
                            <div className='back'>
                                <h1 className='project-title'>{projectTitles[2]}</h1>
                                <h4 className='project-subtitle'>{projectSubtitles[2]}</h4>
                            </div>
                            
                        </div>
                        <div className='project4'>
                            <a className='back' href='https://github.com/ZingadePrathamesh?tab=repositories' target='_blank'>
                                <h1 className='project-title'>SEE MORE!</h1>
                            </a>
                        </div>
                    </div>
            </div>
            <div className="project-right">
                    <div className='project-third'>
                        {
                            "PROJECT".split('').map((letter, index)=>(
                                <h2 key={index} className={index<3 ?"montserrat-extra-bold project-white" : "montserrat-extra-bold project-letter" }>{letter}</h2>
                            ))
                        }
                    </div>
                    <div className='project-second'>
                        {
                            "PROJECT".split('').map((letter, index)=>(
                                <h2 key={index} className={index<3 ?"montserrat-extra-bold project-white" : "montserrat-extra-bold project-letter" }>{letter}</h2>
                            ))
                        }
                    </div>
                    <div className='project-first'>
                        {
                            "PROJECT".split('').map((letter, index)=>(
                                <h2 key={index} className={index<3 ?"montserrat-extra-bold project-white" : "montserrat-extra-bold project-letter" }>{letter}</h2>
                            ))
                        }
                    </div>    
            </div>
        </div>
    );
}
