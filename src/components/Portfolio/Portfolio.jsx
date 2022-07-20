import React from 'react'
import './styles.scss'

export default function Portfolio() {
    return (
        <div className="portfolio" id='portfolio'>
            <ul>
                <li>Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://cdn.dribbble.com/users/3307260/screenshots/15468444/media/447b4501f7a145b05e11c70199a9c417.jpg?compress=1&resize=1200x900" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
