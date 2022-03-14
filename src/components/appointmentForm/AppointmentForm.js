import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitle = (e) => {
    setTitle(e.target.value)
  } 

  const handleContact = (e) => {
    setContact(e.target.value)
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const handleTime = (e) => {
    setTime(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input required type='text' id="title" name="title"  value={title} placeholder="Title" onChange={handleTitle}/>
      <input required type='date' id="date" name="date"  value={date} min={getTodayString} placeholder="MM/DD/YY" onChange={handleDate} />
      <input required type='time' id="time" name="time"  value={time} placeholder="##:##" onChange={handleTime} />
      <ContactPicker contacts={contacts} handleContact={handleContact}/>
      <input type="submit"/> 
    </form>
  );
};
