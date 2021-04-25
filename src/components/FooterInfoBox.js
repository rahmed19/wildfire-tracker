import React, {useEffect} from 'react'
import { motion } from 'framer-motion'
import modal from '../images/modal3.jpg'
import {
    Container,
    Background,
    ModalWrapper,
    ModalImg,
    ModalContent,
    CloseModal

} from './FooterInfoBoxStyles'


export default function FooterInfoBox({ showInfo, setShowInfo }) {

    useEffect(()=>{
        
        document.body.addEventListener('keydown', (e)=>{
            if (e.key === 'Escape'){
                setShowInfo(false)
            }
        })
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
                                           transition={{ type: "spring", damping: 25 }}> 
                                <h1>
                                    Project Details
                             </h1>

                                <h2>My special thanks to&nbsp;
                            <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="new">
                                        Traversy Media
                            </a>&nbsp;on who's&nbsp;
                            <a href="https://www.youtube.com/watch?v=ontX4zfVqK8" target="new">
                                        YouTube Tutorial
                            </a> this is project is largely based upon.</h2>


                                <p>My changes and additions include:&nbsp;
                                
                                the ability to switch between wildfire and volcanoe events
                                using useState() and useEffect(),
                                change of text and iconify markers depending on the category,
                                change of map location based on change of category,
                                styled components to handle the modal
                                and addition of ReactJS framer motion for added animations.</p>

                                <p>Known bugs: some mobile browsers do not click on the icon
                                markers to activate the event info modal. I am actively seeking a
                                solution to this very odd problem.
                                </p>
                            </motion.div>
                            </>



                        </ModalContent>
                        <CloseModal aria-label="Close modal" onClick={() => setShowInfo(false)} />
                    </ModalWrapper>
                </Background>
            </Container >

        </>
    )
}

// 