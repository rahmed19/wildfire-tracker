import React from 'react'
import { motion } from 'framer-motion'
import modal from '../images/modal4.jpg'
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
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background: white;
    color: black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: -100;
    border-radius: 10px;
    z-index: -100;

`
const ModalImg = styled.img`
    width: 100%;
    height: 100%
    border-radius: 10px 0 0 10px;
    background: black;
    z-index: -100;

`
const ModalContent = styled.div`
    display: flex;
    justify-conten: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    z-index: -100;

    p {
        margin-bottom: 1rem;

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
`


export default function FooterInfoBox({ showInfo, setShowInfo }) {

    return (
        <>
            <Container>
                <Background>
                    <ModalWrapper>
                        <ModalImg src={modal} alt="camera" />
                        <ModalContent>
                            <h1>Are you ready?
                            <p>Some stuff goes here.</p>
                            </h1>
                        </ModalContent>
                        <CloseModal aria-label="Close Modal" onClick={() => setShowInfo((prevState) => !prevState)} />
                    </ModalWrapper>
                </Background>
            </Container>

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