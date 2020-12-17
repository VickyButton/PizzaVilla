import React from 'react'
import './SplashMap.css'

import Map from './Map'

function SplashMap() {
    return (
        <div className='flex splash-map' style={{background: window.secondary}}>
            <Map/>
        </div>
    )
}

export default SplashMap;