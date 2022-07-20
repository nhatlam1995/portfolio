import React from 'react'
import { man, down } from '../../assets'
import Typewriter from 'typewriter-effect';
import './styles.scss'

export default function Intro() {
    return (
        <div className="intro" id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={man} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Nguyen Nhat Lam</h1>
                    <h3>Fresher
                        <span>
                            <Typewriter
                                options={{
                                    strings: [" React Native", " ReactJS"],
                                    autoStart: true,
                                    delay: 70,
                                    loop: true
                                }} />
                        </span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src={down} alt="" />
                </a>
            </div>
        </div>
    )
}
