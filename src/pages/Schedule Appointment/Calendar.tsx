import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarProps {
  onDateChange: (date: Date) => void;
}

export const CalendarComponent: React.FC<CalendarProps> = ({ onDateChange }) => {
  return (
    <div className="calendar-container">
      <Calendar onChange={(date: Date) => onDateChange(date)} />
    </div>
  );
}
