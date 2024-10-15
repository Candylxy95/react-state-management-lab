import React from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.msg}</button>;
};

export default Button;
