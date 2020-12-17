import React from 'react'
import {Link} from 'react-router-dom'
import './SplashCard.css'

import Cutout from './Cutout'
import SiteMap from './SiteMap'
import SiteSignature from './SiteSignature'
import Socials from './Socials'
import StoreInformation from './StoreInformation'

function SplashCard(props) {
    const orderLink = window.siteInfo.orderURL !== '' ? <a href={window.siteInfo.orderURL} className='splash-link'>Order</a> : null;

    return (
        <div className='flex splash-card' style={{background: window.primary}}>
            <h1 className='splash-title'>{props.name}</h1>
            <span className='splash-description'>{props.description}</span>
            <div className='flex splash-links'>
                {/* <Link to='/menu' className='splash-link'>Menu</Link> */}
                {orderLink}
            </div>
            <Cutout content={<StoreInformation hours={window.siteInfo.hours} address={window.siteInfo.address}/>} />
            {/* <Socials/> */}
            <SiteMap siteMap={window.siteInfo.siteMap} />
            <SiteSignature/>
        </div>
    )
}

export default SplashCard;