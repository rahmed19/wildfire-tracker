import React, {useEffect} from 'react'
import { motion } from 'framer-motion'
import modal from '../images/modal3.jpg'
import {
    Container,
    Background,
    ModalWrapper,
    ModalImg,
    ModalContent,
    CloseModalFooter

} from './FooterInfoBoxStyles'


export default function FooterInfoBox({ showInfo, setShowInfo }) {

    useEffect(()=>{
        
        const event = document.body.addEventListener('keydown', (e)=>{
            if (e.key === 'Escape'){
                setShowInfo(false)
            }
        })

        return event

    },[])

    return (
        <>
            <Container>
                <Background>
                    <ModalWrapper>
                        <ModalImg src={modal} alt="camera" />
                        <ModalContent>
                            <>
                            <motion.div 
                                           initial={{ y: "-100vh"}}
                                           animate={{y: "0"}}
                                           transition={{ type: "spring", damping: 18 }}> 
                                <h1>
                                    Project Details
                             </h1>

                                <h2>A special thanks to&nbsp;
                            <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="new">
                                        Traversy Media
                            </a>&nbsp;on who's&nbsp;
                            <a href="https://www.youtube.com/watch?v=ontX4zfVqK8" target="new">
                                        YouTube Tutorial
                            </a> this is project is largely based upon. <br />Find the NASA open API source&nbsp; 
                            <a href="https://eonet.sci.gsfc.nasa.gov/api/v3/events" target="new">
                            here.</a> </h2>


                                <p>My changes and additions include:&nbsp;
                                
                                the ability to switch between wildfire and volcano events
                                using useState() and useEffect(),
                                change of text and iconify markers depending on the category,
                                change of map location based on change of category,
                                styled components to handle the modal, responsive CSS,
                                removing the map click handler so as to make the site mobile friendly
                                and addition of ReactJS framer motion for added animations.</p>

                                <p> More about me and my work @ <a href="https://linktr.ee/rahmed19" target="new">Link Tree</a> </p>
                            </motion.div>
                            </>

                            

                        </ModalContent>
                      
                            <CloseModalFooter color={'footer'} aria-label="Close modal" onClick={() => setShowInfo(false)} />
                        
                    </ModalWrapper>
                    
                </Background>
            </Container >

        </>
    )
}

// 