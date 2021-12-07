import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const peopleData = people;
  const [person, setPerson] = useState(peopleData[0]);

  const prevPerson = (personId) => {
    let peopleDataId = personId - 1;
    let lastIndex = peopleData.length - 1;

    if (peopleDataId === 0) setPerson(peopleData[lastIndex]);
    else setPerson(peopleData[peopleDataId - 1])
  }

  const nextPerson = (personId) => {
    let peopleDataId = personId - 1;
    let lastPerson = peopleData.length;

    if (personId === lastPerson) setPerson(peopleData[0]);
    else setPerson(peopleData[peopleDataId + 1]);
  }

  // const randomPerson = () => {
  //   Math.floor(Math.random() * max);
  // }

  return (
    <article key={person.id} className="review">
      <div className="img-container">
        <img src={person.image} alt={person.name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{person.name}</h4>
      <p className="job">{person.job}</p>
      <p className="info">{person.text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => prevPerson(person.id)}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => nextPerson(person.id)}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => { console.log(3) }}>surprise me</button>
    </article>
  )

};

export default Review;
