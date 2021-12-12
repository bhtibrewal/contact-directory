import React, { useState } from 'react'

export default function AddContact() {
    const [state, setState] = useState({
        name: "",
        email: ""
    })
    const add=(e)=>{
        e.preventDefault();
        if(state.name === "" && state.email === "")
            alert("");
        console.log(state.name);
    }
    return (
        <div className="ui main mt-3">
            <h2> Add Contact </h2>
            <form className='ui form' onSubmit={add}>
                <div className="field">
                    <label> Name</label>
                    <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e) => setState({...state,  name: e.target.value })} />
                </div>
                <div className="field">
                    <label >E-mail</label>
                    <input type="text" placeholder="email" value={state.email} onChange={(e) => setState({...state, email: e.target.value })} />
                </div>
                <button className="ui button blue mx-auto">Add</button>
            </form>
            <p>{JSON.stringify(state)}</p>
        </div>
    )
}
