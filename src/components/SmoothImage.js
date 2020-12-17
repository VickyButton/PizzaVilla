import React, {useState} from 'react'
import './SmoothImage.css'

function SmoothImage(props) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <img className={`smooth-image image-${imageLoaded ? 'visible' : 'hidden'} ${props.imgType}`} alt={props.alt || ''} src={props.src} onLoad={() => setImageLoaded(true)}/>
    )
}

export default SmoothImage;