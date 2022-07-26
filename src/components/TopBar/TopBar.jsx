import React from 'react'
import './styles.scss'
import { Person, Mail } from '@mui/icons-material';

export default function TopBar({ menuOpen, setMenuOpen }) {
    console.log(menuOpen && "active")
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Intro</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+8438 993 5371</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>nhatlam1695@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
