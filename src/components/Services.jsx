import '../styles/services.css';

export default function Services(){
    const services= "SERVICES";
    const servicesArray = services.split("");

    return(
        <div className="services">
            <div>
                <h3 className='service-head montserrat-regular '>This is How I can help you in your ambitions!</h3>
            </div>
            <div className="bottom">
                <div className='left'>
                    hello
                </div>
                <div className='middle'>
                    {
                        servicesArray.map((letter, index)=>
                        {
                            if(index <=2) return <h4 className='service-letter white'>{letter}</h4>
                            else return <h4 className='service-letter'>{letter}</h4> 
                        }
                        )
                    }
                </div>
                <div className='right'>
                    hello
                </div>
            </div>
        </div>
    )
}