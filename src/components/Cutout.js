import React from 'react'
import './Cutout.css'

function Cutout(props) {
    return (
        <div className='cutout flex'>
            {props.content}
        </div>
    )
}

export default Cutout;