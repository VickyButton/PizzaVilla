import React from 'react'
import './Home.css'

import Splash from './Splash'

function Home() {
    return (
        <Splash information={window.siteInfo} image={window.siteInfo.splashImage} name={window.siteInfo.name} description={window.siteInfo.description} />
    )
}

export default Home;