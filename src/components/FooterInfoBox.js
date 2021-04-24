import React from 'react'
import { motion } from 'framer-motion'
import modal from '../images/modal4.jpg'

export default function FooterInfoBox({ showInfo, setShowInfo }) {

    return (
        <>
            <div className="modal-container">
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
            </div>
        </>
    )
}

// 