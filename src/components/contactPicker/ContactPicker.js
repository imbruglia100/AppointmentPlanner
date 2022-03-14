import React from "react";

export const ContactPicker = ({handleContact, contacts}) => {
  return (
    <select onChange={handleContact}>
      <option>{"No Contact selected"}</option>
      
      {contacts.map( (ele, index) => {
        return <option>{ele.name}</option>
      })}
    </select>
  );
};
