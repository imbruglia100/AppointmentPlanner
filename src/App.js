import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState } from "react";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContact] = useState([]);
 const [appointments, setAppointment] = useState([]);

 const addContact = (newContact) => {
    setContact((prev) => {
      return [
        {
          name: newContact.name,
          number: newContact.number,
          email: newContact.email
        }
        , ...prev]
    });
 }

 const addAppointment = (newAppointment) => {
  setAppointment((prev) => {
    return [
    {
      title: newAppointment.title,
      contact: newAppointment.contact,
      date: newAppointment.date,
      time: newAppointment.time
    }, ...prev]
  });
}



  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
              contacts={contacts}
              addContact={addContact}
              />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              appointments={appointments}
              contacts={contacts} 
              addAppointment={addAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
