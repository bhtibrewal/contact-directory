import { useState, useEffect } from 'react';
import './App.css';

import AddContact from './components/AddContact';
import ContactsList from './components/ContactsList';
import Header from './components/Header';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContact]=useState([]);
  
  const addContactHandler=(contact)=>{
    setContact([...contacts,{id: contacts.length , ...contact}])
  }
  const removeContactHandler=(id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact !== id;
    })
    setContact(newContactList)
  }
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retriveContacts) setContact(retriveContacts);
  }, []);  

  return (
    <div className="App">
      <Header/>
      <div className='ui container'>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactsList contacts={contacts} getContactId={removeContactHandler}/>
      </div>
    </div>
  );
}

export default App;