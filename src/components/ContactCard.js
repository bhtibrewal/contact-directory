import React from 'react'
import user from '../images/user.png';

export default function ContactCard({ contact }) {
    return (
        <div className='item'>
            <img className='ui avatar image' src={user} />
            <div className='content'>
                <div className='header'>{contact.name}</div>
                <div>{contact.email}</div>
            </div>
            <i className='trash alternate outline icon'></i>
        </div>
    )
}
