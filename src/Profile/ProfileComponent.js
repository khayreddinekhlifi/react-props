import React, { Component } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
function ChildrenImage(props) {
  return (
    <div className="APP-Image">
      <img
        src="https://www.dynamique-mag.com/wp-content/uploads/8efddbf080b9aa2f0b141b19e1656fd9.jpg"
        alt={props.bio}
        style={{ margin: 30 }}
      />
    </div>
  );
}
export default function ProfileComponent(FullName, bio, profession) {
  const alertMyInput = (FullName) => alert(FullName);
  return (
    <div>
      <ChildrenImage />
      <HandelName alertMyInput={alertMyInput} />
    </div>
  );
}
ProfileComponent.defaulteProps = {
  FullName: "khayri",
};
Component.propTypes = {
  ChildrenImage: propTypes.function,
  HandelName: propTypes.function,
  FullName: propTypes.string,
};
const HandelName = (props) => {
  console.log(`props:`, props.Fullname);
  return (
    <button
      onClick={() => props.alertMyInput(`My name is khlifi khayreddine`)}
      style={{ color: "white", backgroundColor: "blue", margin: 20 }}
    >
      ClickMe
    </button>
  );
};
