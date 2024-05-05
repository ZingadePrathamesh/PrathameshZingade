import { TbWriting } from 'react-icons/tb';
import '../styles/services.css';
import { MdApi, MdPermIdentity } from 'react-icons/md';
import { SiAffinitydesigner, SiPowerpages } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import React, { useEffect, useState } from 'react';

export default function Services(){
    const services= "SERVICES";
    const servicesArray = services.split("");

    const iconArray = [
        TbWriting,
        MdApi,
        SiAffinitydesigner,
        CgWebsite,
        SiPowerpages,
        MdPermIdentity    
    ]

    const servicesHeadings = [
        "Content Writing",
        "REST API",
        "Graphic Designing",
        "Web Applications",
        "Landing Pages",
        "Portfolio Sites"
    ]

    const servicesSubHeadings = [
        "I can write blogs, articles, documentations and content that fits your applications.",
        "i am good at developing secure aPI using spring boot 3 with spring security and jWT token.",
        "using canva and Photoshop i can create stunning, posters, pamphlets, designs and much more. ",
        "web applications that will help you bring your ideas in reality!",
        "pages that are tailored specifically for your business including SEO",
        "let me take care of showcasing your profession over the internet!"
    ]

    const [flexDirection, setFlexDirection] = useState('row'); // Default flex direction for desktop

    useEffect(() => {
        // Function to handle window resize event
        const handleResize = () => {
            // Update flex direction based on screen width
            if (window.innerWidth <= 767) {
                setFlexDirection('column'); // Change to column for mobile
            } else {
                setFlexDirection('row'); // Default to row for desktop
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures effect runs only once on component mount

    return(
        <div className="services" id='services'>
            <div>
                <h3 className='service-head montserrat-regular '>This is How I can help you in your ambitions!</h3>
            </div>
            <div className="bottom">
                <div className='left'>

                {
                        (() => {
                            const elements = [];
                            for (let i = 0; i < iconArray.length-3; i++) {
                                elements.push(
                                    <div className='service-l' style={{ flexDirection: flexDirection }} key={i}>
                                        {/* Conditionally render based on flex direction */}
                                        {flexDirection === 'row' ? (
                                            <>
                                                <div className='service-l-text'>
                                                    <h1 className='montserrat-bold service-l-head'>{servicesHeadings[i]}</h1>
                                                    <h2 className='montserrat-regular service-l-subhead'>{servicesSubHeadings[i]}</h2>
                                                </div>
                                                {React.createElement(iconArray[i], { className: 'service-l-icon' })}
                                            </>
                                        ) : (
                                            <>
                                                {React.createElement(iconArray[i], { className: 'service-l-icon' })}
                                                <div className='service-l-text'>
                                                    <h1 className='montserrat-bold service-l-head'>{servicesHeadings[i]}</h1>
                                                    <h2 className='montserrat-regular service-l-subhead'>{servicesSubHeadings[i]}</h2>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            }
                            return elements;
                        })()
                    }
                </div>
                <div className='middle'>
                    {
                        servicesArray.map((letter, index)=>
                        {
                            if(index <=2) return <h4 className='service-letter white' key={index}>{letter}</h4>
                            else return <h4 className='service-letter' key={index}>{letter}</h4> 
                        }
                        )
                    }
                </div>
                <div className='right'>
                    {
                        (() => {
                            const elements = [];
                            for (let i = 3; i < iconArray.length; i++) {
                                elements.push(
                                    <div className='service-r' key={i} style={{flexDirection:flexDirection}}>
                                        {React.createElement(iconArray[i], { className: 'service-r-icon' })}
                                        <div className='service-r-text'>
                                            <h1 className='montserrat-bold service-r-head'>{servicesHeadings[i]}</h1>
                                            <h2 className='montserrat-regular service-r-subhead'>{servicesSubHeadings[i]}</h2>
                                        </div>
                                    </div>
                                );
                            }
                            return elements;
                        })()
                    }
                </div>
            </div>
        </div>
    )
}