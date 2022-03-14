import React , {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  
  useEffect(() => {
    setDuplicate(props.contacts.includes( 
      (element) => {
        return name === element.name ? true : false
  }))},[props.contacts, name]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate){
      props.addContact({
        name: name,
        number: number,
        email: email
      });
      //clear form here
      setName('');
      setNumber('');
      setEmail('');
      setDuplicate(false)
    }else{
      throw console.error("Contact name is already in list.");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList obj={props.contacts}/>
      </section>
    </div>
  );
};
