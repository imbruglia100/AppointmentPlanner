import React from "react";


export const ContactForm = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  handleSubmit
}) => {
  
const handleName = ({target}) => {
  setName(target.value)
}

const handleNumber = ({target}) => {
  setNumber(target.value)
}

const handleEmail = ({target}) => {
  setEmail(target.value)
}

  return (
    <form onSubmit={handleSubmit}>
      <input required type='text' name="name"  value={name} placeholder="Name" onChange={handleName}/>
      <input required type='tel' name="number"  value={number} placeholder="555-555-5555" onChange={handleNumber} />
      <input required type='email' name="email" value={email} placeholder="Email@example.com" onChange={handleEmail}/>
      <input type="submit"/> 
    </form>
    
  );
};
