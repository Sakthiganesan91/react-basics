import React from "react";

function ChildComponent({ data, children }) {
  const studentsList = [
    {
      id: 1,
      name: "Sakthi",
      age: 21,
    },
    {
      id: 2,
      name: "Ganesh",
      age: 22,
    },
    {
      id: 3,
      name: "Virat",
      age: 35,
    },
    {
      id: 4,
      name: "Kohli",
      age: 36,
    },
  ]; //array of objects
  return (
    <div>
      {studentsList.map((student, index) => {
        return (
          <React.Fragment key={index}>
            <div
              style={{
                border: "1px solid black",
                backgroundColor: "white",
                color: "black",
                margin: "0.5rem 0",
              }}
            >
              <h3>{student.name}</h3>
              <p>{student.age}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default ChildComponent;

// function ChildComponent({data}) {
//     return <div>ChildComponent {data}</div>;
//   }
