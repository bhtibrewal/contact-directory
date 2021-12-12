import React from 'react'
import ContactCard from './ContactCard'

export default function ContactsList(props) {
    const list = 
        props.contacts.map((contact) => {
            return (
                <ContactCard contact={contact}/>
            )
        })
    
    return (
        <div className='ui celled list'>
            <h2>Contact List</h2>
            {list}
        </div>
    )
}
