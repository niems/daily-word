import React from 'react';
import DailyWord from './neighborhoods/blocks/DailyWord';

export default function WordArchive({words}) {
  const wordOfTheDay = words.shift(); //* newest word

  return (
    <article id='word-archive'>
      <h1>Word of the Day</h1>
      <DailyWord data={wordOfTheDay} />

      <h2>Daily Word Archives</h2>
      {
        words.map(word => (
          <DailyWord key={word.name} data={word} />
        ))
      }
    </article>
  );
}