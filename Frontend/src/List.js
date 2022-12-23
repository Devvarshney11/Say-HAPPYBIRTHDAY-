import React from "react";


const List = ({ people }) => {
  
  return (
    <>
{/* {console.log(people)} */}

      {people.map((person) => {
        const {  name, age,date, image } = person;
        return (
          <article className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <p>{date}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
