import React from 'react';

const Page = ({ people }) => {
  return (
    <div>
      {people.map(({ name }) => {
        return <div key={name}>{name}</div>;
      })}
    </div>
  );
};

export default Page;
