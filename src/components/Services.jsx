import { TbWriting } from 'react-icons/tb';
import '../styles/services.css';
import { MdApi, MdPermIdentity } from 'react-icons/md';
import { SiAffinitydesigner, SiPowerpages } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import React, { useEffect, useState } from 'react';

export default function Services(){
    const servicesArray = "SERVICES".split("");

    const servicesData = [
        {
            icon: TbWriting,
            heading: "Content Writing",
            subheading: "I can write blogs, articles, documentations and content that fits your applications."
        },
        {
            icon: MdApi,
            heading: "REST API",
            subheading: "I am good at developing secure API using Spring Boot with Spring Security and JWT token."
        },
        {
            icon: SiAffinitydesigner,
            heading: "Graphic Designing",
            subheading: "Using Canva and Photoshop, I can create stunning posters, pamphlets, designs, and much more."
        },
        {
            icon: CgWebsite,
            heading: "Web Applications",
            subheading: "Web applications that will help you bring your ideas into reality!"
        },
        {
            icon: SiPowerpages,
            heading: "Landing Pages",
            subheading: "Pages that are tailored specifically for your business including SEO."
        },
        {
            icon: MdPermIdentity,
            heading: "Portfolio Sites",
            subheading: "Let me take care of showcasing your profession over the internet!"
        }
    ];

    const [flexDirection, setFlexDirection] = useState('row'); // Default flex direction for desktop

    useEffect(() => {
        // Function to handle window resize event for responsiveness
        //especially for the icons used to depict the services on the left side.
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
                            for (let i = 0; i < servicesData.length-3; i++) {
                                elements.push(
                                    <div className='service-l' style={{ flexDirection: flexDirection }} key={i}>
                                        {/* Conditionally render based on flex direction */}
                                        {flexDirection === 'row' ? (
                                            <>
                                                <div className='service-l-text'>
                                                    <h1 className='montserrat-bold service-l-head'>{servicesData[i].heading}</h1>
                                                    <h2 className='montserrat-regular service-l-subhead'>{servicesData[i].subheading}</h2>
                                                </div>
                                                {React.createElement(servicesData[i].icon, { className: 'service-l-icon', alt: servicesData[i].subheading  })}
                                            </>
                                        ) : (
                                            <>
                                                {React.createElement(servicesData[i].icon, { className: 'service-l-icon',  alt: servicesData[i].subheading })}
                                                <div className='service-l-text'>
                                                    <h1 className='montserrat-bold service-l-head'>{servicesData[i].heading}</h1>
                                                    <h2 className='montserrat-regular service-l-subhead'>{servicesData[i].subheading}</h2>
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
                            for (let i = 3; i < servicesData.length; i++) {
                                elements.push(
                                    <div className='service-r' key={i} style={{flexDirection:flexDirection}}>
                                        <>
                                            {React.createElement(servicesData[i].icon, { className: 'service-r-icon', alt: servicesData[i].subheading })}
                                            <div className='service-r-text'>
                                                <h1 className='montserrat-bold service-r-head'>{servicesData[i].heading}</h1>
                                                <h2 className='montserrat-regular service-r-subhead'>{servicesData[i].subheading}</h2>
                                            </div>
                                        </>
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