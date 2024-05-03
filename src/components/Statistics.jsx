import '../styles/statistics.css';

export default function Statistics(){
    const subHeads = ["PROJECTS", "LEET CODE", "CGPA"]
    const values = ['5', '16E 8M 2H', '9.09']

    return(
        <div className="statistics">
            <div className="statistics-heading">
                {
                    "STATISTICS".split('').map((letter, index)=>(
                        <h2 className={index<4 ?"montserrat-extra-bold statistics-white" : "montserrat-extra-bold statistics-letter" }>{letter}</h2>
                    ))
                }
            </div>

            <div className="circles-div">
                {
                    subHeads.map((sub, index)=>(
                        <div className="circle">
                            <div className="circle-text">
                                <h4 className="sub-head montserrat-bold">{sub}</h4>
                                <h3 className="value">{values[index]}</h3>
                            </div>
                        </div>
                    ))
                }
                
            </div>

        </div>
    )
}