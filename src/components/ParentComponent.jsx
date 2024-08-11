import React from "react";
import ChildComponent from "./ChildComponent";

function AdditionalComponent() {
  return (
    <>
      <div>Additonal Component</div>
    </>
  );
}

const ParentComponent = () => {
  const data = "This is a Data";
  return (
    <>
      <p>This is a parent Component</p>
      <ChildComponent data={data}>
        <AdditionalComponent />
        <div>Hello World</div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ex odio
          quia cupiditate nulla officia repudiandae quasi voluptate magni.
        </p>
      </ChildComponent>
    </>
  );
};

// function ParentComponent(parameters) {
//   return (
//     <div>ParentComponent</div>
//   )
// }

export default ParentComponent;
