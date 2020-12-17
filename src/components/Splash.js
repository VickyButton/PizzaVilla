import React from 'react'
import './Splash.css'

import SmoothImage from './SmoothImage'
import SplashCard from './SplashCard'

function Splash(props) {
    const splashImage = window.innerWidth > 800 ? <SmoothImage imgType='splash-image' alt='' src={props.image}/> : null;

    return (
        <div className='flex splash' style={{background: window.secondary}}>
            {splashImage}
            <SplashCard name={props.name} description={props.description} />
        </div>
    )
}

export default Splash;