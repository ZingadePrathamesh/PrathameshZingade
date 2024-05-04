import { useState } from 'react';
import '../styles/statistics.css';
import { useEffect } from 'react';

    function animateValue(setState, start, end, duration, isDecimal) {
        let startTimestamp = null;
        const step = (timestamp) => 
            {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                
                if(isDecimal){
                    const value = (progress * (end - start) + start).toFixed(2);
                    setState(value);
                }
                else{
                    const value = Math.floor(progress * (end - start) + start);
                    setState(value);
                }
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
        window.requestAnimationFrame(step);
    }

export default function Statistics(){
    const [projectCount, setProjectCount] = useState(0);
    const [easy, setEasy] = useState(16);
    const [medium, setMedium] = useState(8);
    const [hard, setHard] = useState(3);
    const [cgpaScore, setcgpaScore] = useState(0.00);
    const subHeads = ["PROJECTS", "LEET CODE", "CGPA"]
    const values = [projectCount, `${easy}E ${medium}M ${hard}H`, cgpaScore]


    useEffect(() => {
        const animationLoop = () => {
          setInterval(() => {
            animateValue(setProjectCount, 0, 9, 1500, false);
            animateValue(setcgpaScore, 0.00, 9.09, 1500, true);
            animateValue(setEasy, 0, 16, 1500, false);
            animateValue(setMedium, 0, 8, 1500, false);
            animateValue(setHard, 0, 3, 1500, false);
            
          }, 6000);
        };
        animationLoop(); // Start the animation loop initially
        return () => clearInterval(animationLoop);
    }, []);
      


    return(
        <div className="statistics">
            <div className="statistics-heading">
                {
                    "STATISTICS".split('').map((letter, index)=>(
                        <h2 key={index} className={index<4 ?"montserrat-extra-bold statistics-white" : "montserrat-extra-bold statistics-letter" }>{letter}</h2>
                    ))
                }
            </div>

            <div className="circles-div">
                {
                    subHeads.map((sub, index)=>(
                        <div className="circle" key={index}>
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