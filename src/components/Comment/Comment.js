import React from 'react';

const Comment = (props) => (
  <div alt="" className="com_wrap wrapper">
    <div className="com_info"><img src={`images/${props.image}.png`} alt={props.image} width="100%"/></div>
    <div className="com_body">
      <h3>{props.title}</h3>
      <h4>{props.name}</h4>
      <p>{props.body}</p>
    </div>
  </div>
);

export default Comment;
