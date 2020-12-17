import React, {useState} from 'react'
import './Map.css'

function Map() {
    const [mapLoaded, setMapLoaded] = useState(false);

    return (
        <div id="mymap-display" className={`map-${mapLoaded ? 'visible' : 'hidden'}`} style={{height:'100%', width:'100%', maxWidth:'100%'}}><iframe style={{height: '100%', width: '100%', border: 0}} frameborder="0" title="Map" src="https://www.google.com/maps/embed/v1/place?q=21501+Village+Lakes+Center,+Land+O+Lakes,+FL+34639&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" onLoad={() => setMapLoaded(true)}></iframe></div>
    )
}

export default Map;