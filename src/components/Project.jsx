import '../styles/project.css';

export default function Project(){

    const projectData = [
        {
            title: "Green Harbour",
            subtitle: "A collaborative platform for Tree plantation enthusiasts for a better tomorrow.",
            url: "#" // Add URL here
        },
        {
            title: "Event Management",
            subtitle: "An event management platform for teams and event managers to organize and distribute the work.",
            url: "https://github.com/ZingadePrathamesh/Event-Management-Web-Application"
        },
        {
            title: "Groove",
            subtitle: "A music player app that can play the music stored in the mobile storage.",
            url: "https://github.com/ZingadePrathamesh/Groove_Music_Player" // Add URL here
        }
    ];

    function letterPrinting(){
        return (
            "PROJECT".split('').map((letter, index)=>(
                <h2 key={index} className={index<3 ?"montserrat-extra-bold project-white" : "montserrat-extra-bold project-letter" }>{letter}</h2>
            ))
        )
    }

    function printProjects(){
        return (
            projectData.map((data, index)=>(
                <div className={"project"+(index+1)}>
                    <a className='back' href={data.url}>
                        <h1 className='project-title'>{data.title}</h1>
                        <h4 className='project-subtitle'>{data.subtitle}</h4>
                    </a>
                </div>
            )
            )
        )
    }
    return(
        <div className="project" id='project'>
            <div className="project-left">
                    <div className='project-first'>{letterPrinting()}</div>
                    <div className='project-second'>{letterPrinting()}</div>
                    <div className='project-third'>{letterPrinting()}</div>         
            </div>
            <div className="project-middle">
                    <div className='grid-container montserrat-regular'>
                        {printProjects()}
                        <div className='project4'>
                            <a className='back' href='https://github.com/ZingadePrathamesh?tab=repositories' target='_blank'>
                                <h1 className='project-title'>SEE MORE!</h1>
                            </a>
                        </div>
                    </div>
            </div>
            <div className="project-right">
                <div className='project-third'>{letterPrinting()}</div>
                <div className='project-second'>{letterPrinting()}</div>
                <div className='project-first'>{letterPrinting()}</div>
            </div>
        </div>
    );
}
