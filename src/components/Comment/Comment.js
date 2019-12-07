import React from 'react';
import styles from './Comment.scss';

const Comment = ({ image, title, name, body }) => (
  <div className={styles.component}>
    <div className={styles.info}>
      <img
        src={`images/${image}.png`}
        alt={image}
        width="100%" />
    </div>
    <div className={styles.body}>
      <h3>{title}</h3>
      <h4>{name}</h4>
      <p>{body}</p>
    </div>
  </div>
);

export default Comment;
