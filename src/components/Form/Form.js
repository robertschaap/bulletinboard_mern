import React from 'react';

const Form = () => (
  <form id="postcomment" action="/postcomment" method="post" class="wrapper">
    <label>What's your name?:</label>
    <input type="text" name="com_name"/>

    <label>Write a title (max 100 char):</label>
    <input type="text" name="com_title"/>

    <label>Share your message:</label>
    <textarea type="text" name="com_body"></textarea>

    <label>Select an avatar:</label>
    <select name="com_avatar">
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
);

export default Form;
