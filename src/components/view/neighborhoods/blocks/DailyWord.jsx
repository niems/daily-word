import React from 'react';
import Word from './common/Word';
import Definition from './common/Definition';
import Example from './common/Example';

export default function DailyWord({ data }) {
  return (
    <section className='daily-word'>
      <Word word={data.name} />
      <Definition def={data.definition} />
      <Example example={data.example} />
    </section>
  );
};