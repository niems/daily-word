import React from 'react';

export default function Timestamp({ date }) {
  const month = date.month;
  const day = date.day;
  const year = date.year;

  return (
    <div className='timestamp'>
      <span className='month'>{month}</span>
      <span className='day'>{day}</span>
      <span className='year'>{year}</span>
    </div>
  );
}