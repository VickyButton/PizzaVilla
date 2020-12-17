import React from 'react'
import './Hours.css'

function Hours(props) {
    const hours = props.hours;
    return (
        <div className='flex hours'>
            <div>Monday: <span>{hours.monday}</span></div>
            <div>Tuesday: <span>{hours.tuesday}</span></div>
            <div>Wednesday: <span>{hours.wednesday}</span></div>
            <div>Thursday: <span>{hours.thursday}</span></div>
            <div>Friday: <span>{hours.friday}</span></div>
            <div>Saturday: <span>{hours.saturday}</span></div>
            <div>Sunday: <span>{hours.sunday}</span></div>
        </div>
    )
}

export default Hours;