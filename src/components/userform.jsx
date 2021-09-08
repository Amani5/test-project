import React, { useState } from "react";
import { withRouter } from 'react-router-dom'; 

export function UserForm(props) {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.history.push('/characters');
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text"
        value={name}
        onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" 
        value={lastname}
        onChange={e => setLastName(e.target.value)}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default withRouter(UserForm);