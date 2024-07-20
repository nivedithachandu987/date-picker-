
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerComponent.css';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="date-picker-container">
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="d MMMM, yyyy"
       placeholderText="M-D-Y"
      />
      {selectedDate && (
        <div className="selected-date">
          Selected Date: {selectedDate.toLocaleDateString(undefined, { month:'long',year: 'numeric', day: 'numeric' })}
        </div>
      )}
   
  </div>
);
};
export default DatePickerComponent;
