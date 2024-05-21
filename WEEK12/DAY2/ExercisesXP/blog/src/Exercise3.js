import React, { Component } from 'react';
import './Exercise.css';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>Hello, I'm Exercise Component</h1>
        <p className="para">This is a paragraph.</p>
        <a href="#">This is a link</a>
        <form>
          <input type="text" placeholder="Input field" />
          <button type="submit">Submit</button>
        </form>
        <img src="image.jpg" alt="Example" />
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
