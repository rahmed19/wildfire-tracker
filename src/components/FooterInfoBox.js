import React from 'react'
import { motion } from 'framer-motion'

export default function FooterInfoBox({ showInfo, setShowInfo }) {
    return (
        <>
            <motion.div className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            />
            <motion.div className="modal-wrapper"
                initial={{ y: "100vh" }}
                animate={{ y: "0" }}>

                <div className="modal-box">
                    <div className="modal-image">
                        <img src={process.env.REACT_APP_IMG} />
                    </div>
                    <div className="modal-content modal-border">
                        <h1>Project Information</h1>
                        <h3>This demo ReactJS project was built largely based on&nbsp;
                        <a href="https://www.youtube.com/watch?v=ontX4zfVqK8" target="new">
                                this Youtube tutorial.</a></h3>
                        <a href="#" className="modal-close" onClick={() => setShowInfo(false)} />


                        <div className="divs-flexer">
                            <div className="div-flexer">
                                <h3>ReactJS technologies used include:</h3>
                                <ul>
                                    <li>useState()</li>
                                    <li>useEffect()</li>
                                    <li>&lt;GoogleMapReact /&gt;</li>
                                    <li>Iconify pbrary</li>
                                    <li>Framer Motion</li>
                                </ul>
                            </div>

                            <div className="div-flexer">
                                <h3>Additions to base project:</h3>
                                <ul>
                                    <li>useState()</li>
                                    <li>useEffect()</li>
                                    <li>&lt;GoogleMapReact /&gt;</li>
                                    <li>Iconify pbrary</li>
                                    <li>Framer Motion</li>
                                </ul>
                            </div>
                        </div>


                    </div>




                </div>
            </motion.div >
        </>
    )
}

// 