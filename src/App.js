import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactsList from './components/ContactsList';
import Header from './components/Header';

function App() {
  const [contact, setContact]=useState([])
  const contacts=[
    {
      id: "1",
      name: "mona",
      email: "monatib16@gmail.com"
    },
    {
      id: "2",
      name: "bhavika",
      email: "bhtibrewal@gmail.com"
    }
  ]
  return (
    <div className="App">
      <Header/>
      <div className='ui container'>
      <AddContact/>
      <ContactsList contacts={contacts}/>
      </div>
    </div>
  );
}

export default App;