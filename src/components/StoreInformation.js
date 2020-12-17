import React from 'react'
import './StoreInformation.css'

import Hours from './Hours'
import SplashMap from './SplashMap'
import QuickContact from './QuickContact'

function StoreInformation(props) {
    return (
        <div className='flex store-information'>
            <div>
                <h2>Our Location</h2>
                <span>{props.address}</span>
                <SplashMap/>
            </div>
            <div>
                <h2>Contact</h2>
                <QuickContact phone={props.phone} email={props.email}/>
            </div>
            <div>
                <h2>Hours</h2>
                <Hours hours={props.hours}/>
            </div>
        </div>
    )
}

export default StoreInformation;