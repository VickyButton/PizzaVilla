import React from 'react'
import './QuickContact.css'

function QuickContact(props) {
    return (
        <div className='flex quick-contact'>
            <div>Phone: <span>{window.siteInfo.phone}</span></div>
            <div>Email: <span>{window.siteInfo.email}</span></div>
        </div>
    )
}

export default QuickContact;