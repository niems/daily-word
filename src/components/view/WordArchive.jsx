import React from 'react';
import DailyWord from './neighborhoods/blocks/DailyWord';

export default function WordArchive({words}) {
  const wordOfDay = words.shift();

  return (
    <article id='word-archive'>
      <h1>Word of the Day</h1>
      <DailyWord word={wordOfDay} />
      {
        words.map(word => (
          <DailyWord key={word.name} data={word} />
        ))
      }
    </article>
  );
}