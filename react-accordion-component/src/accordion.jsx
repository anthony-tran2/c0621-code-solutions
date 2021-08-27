import React, { useState } from 'react';

export default function Accordion() {

  const [state, setState] = useState({ current: '' });

  const handleDoubleClick = e => {
    const name = e.target.getAttribute('name');
    if (name) {
      if (name !== state.current) setState({ current: name });
      else setState({ current: '' });
    }
  };

  return (
    <div className="row true-center full-height">
      <div onDoubleClick={handleDoubleClick}>
        <div name="HTML" className="header">
          <h1 name="HTML">Hypertext Markup Language</h1>
        </div>
        <div name="HTML" className={state.current === 'HTML' ? 'text' : 'text hidden'}>
          <p name="HTML">Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.</p>
        </div>
        <div name="CSS" className="header">
          <h1 name="CSS">Cascading Style Sheets</h1>
        </div>
        <div name="CSS" className={state.current === 'CSS' ? 'text' : 'text hidden'}>
          <p name="CSS">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document writte in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
        </div>
        <div name="JavaScript" className="header">
          <h1 name="JavaScript">JavaScript</h1>
        </div>
        <div name="JavaScript" className={state.current === 'JavaScript' ? 'text' : 'text hidden'}>
          <p name="JavaScript">JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
        </div>
      </div>
    </div>
  );
}
