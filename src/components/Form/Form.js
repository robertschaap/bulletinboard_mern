import React from 'react';
import styles from './Form.scss';

const Form = (props) => {
  const {
    avatar,
    onChange,
    onSubmit,
  } = props;

  return (
    <main className={styles.component}>
      <section>
        <h2>Write Something</h2>
        <form onSubmit={onSubmit} className={styles.form}>

          <label>What's your name?:</label>
          <input
            type="text"
            name="name"
            onChange={onChange} />

          <label>Write a title (max 100 char):</label>
          <input
            type="text"
            name="title"
            onChange={onChange} />

          <label>Share your message:</label>
          <textarea
            type="text"
            name="body"
            onChange={onChange} />

          <label>Select an avatar:</label>
          <select
            name="avatar"
            value={avatar}
            onChange={onChange}>
            <option value="bunny">A cute bunny</option>
            <option value="elephant">A fierce elephant</option>
            <option value="hippo">A loud hippo</option>
            <option value="hyena">A laughing hyena</option>
            <option value="kitty">A rofl-ing kitty</option>
            <option value="puppy">A bashful puppy</option>
            <option value="sheep">The master race</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default Form;
