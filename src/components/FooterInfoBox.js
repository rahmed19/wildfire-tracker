import React from 'react'
import { motion } from 'framer-motion'
import modal from '../images/modal3.jpg'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -100;

`
const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -100;
`
const ModalWrapper = styled.div`
    // width: 800px;
    // height: 600px;
    width: 95vw;
    max-width: calc(100% - 600px);
    height: 90vh;
    max-height: calc(100% - 300px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background: white;
    color: black;
    display: grid;
    grid-template-rows: repeat(1, 200px); 
    position: relative;
    z-index: -100;
    border-radius: 10px;
    z-index: -100;

    @media (max-width: 1200px){
        min-height: 600px;
        min-width: 400px;
        display: flex;
        flex-direction: rows:
    }

`
const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: black;
    z-index: -100;
    object-fit: cover;
    
    @media (max-width: 1200px){
        display: none;
    }

`
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.3;
    color: #141414;
    z-index: -100;
    word-wrap: break-word;
    overflow: hidden;
    margin: 0 auto;

    h1 {
       font-family: Dr Sugiyama;
       font-size: 4rem;
    }

    p {
        font-size: 1rem;
        font-weight: 500;
    }

    h2 {
        margin: 1rem;
        font-weight: 800;
    }

    h2 a: link, a:visited, a:hover, a:active {
        color: black;
        
    }

    @media (max-width: 1200px){
        overflow: scroll;
    }


`

const CloseModal = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: -100;
    color: white;
    @media (max-width: 1200px){
        color: black;
    }
`


export default function FooterInfoBox({ showInfo, setShowInfo }) {

    return (
        <>
            <Container>
                <Background>
                    <ModalWrapper>
                        <ModalImg src={modal} alt="camera" />
                        <ModalContent>
                            <>

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
                                the ability to switch between wildfire and volcanoe events,
                                change of text and iconify markers depending on the category,
                                change of map location based on change of category,
                                styled components to handle the modal
                                and addition of ReactJS framer motion for added animations.</p>

                                <p>Known bugs include: the app is not truly mobile friendly. Some mobile browsers do not actively click on the
                                markers to activate the event info modal. I am actively seeking a
                                solution to this very odd problem.
                                </p>
                            </>



                        </ModalContent>
                        <CloseModal aria-label="Close modal" onClick={() => setShowInfo((prevState) => !prevState)} />
                    </ModalWrapper>
                </Background>
            </Container >

            {/* <div className="modal-container">
                <div className="modal">
                    <div className="modal-column">
                        <img src={modal} />
                    </div>
                    <div className="modal-column">
                        <h1>
                            Project Details
                       </h1>

                        <h2>My special thanks to&nbsp;
                            <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="new">
                                Traversy Media
                            </a>&nbsp;on who's&nbsp;
                            <a href="https://www.youtube.com/watch?v=ontX4zfVqK8" target="new">
                                YouTube Tutorial
                            </a> this is project is largely based upon.
                            </h2>

                        <h3>My changes and additions include:&nbsp;
                            <br />
                            <ul>
                                <li>responsive and mobile friendly design,</li>
                                <li>the ability to switch between wildfire and volcanoe events,</li>
                                <li>change of text and iconify markers depending on the category,</li>
                                <li>change of map location based on change of category,</li>
                                <li>and addition of ReactJS framer motion for added animations.</li>
                            </ul>

                        </h3>

                    </div>
                </div>
            </div> */}
        </>
    )
}

// 