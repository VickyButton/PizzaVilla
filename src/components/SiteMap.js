import React from 'react'
import {Link} from 'react-router-dom'
import './SiteMap.css'

function SiteMap(props) {
    return (
        <div className='flex site-map'>
            {props.siteMap.map(page => (
                <Link to={`/${page.directory}`}>{page.name}</Link>
            ))}
        </div>
    )
}

export default SiteMap;