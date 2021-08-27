import React, { useState } from 'react';

export default function Accordion() {

  const [data, setData] = useState({ tab: '' });

  const handleDoubleClick = e => {
    const tabValue = e.target.getAttribute('data-tab');
    if (tabValue) {
      if (tabValue !== data.tab) setData({ tab: tabValue }); else setData({ tab: '' });
    }
  };

  return (
    <div className="row true-center full-height">
      <div onDoubleClick={handleDoubleClick}>
        <div data-tab="HTML" className="header">
          <h1 data-tab="HTML">Hypertext Markup Language</h1>
        </div>
        <div data-tab="HTML" className={data.tab === 'HTML' ? 'text' : 'text hidden'}>
          <p data-tab="HTML">Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.</p>
        </div>
        <div data-tab="CSS" className="header">
          <h1 data-tab="CSS">Cascading Style Sheets</h1>
        </div>
        <div data-tab="CSS" className={data.tab === 'CSS' ? 'text' : 'text hidden'}>
          <p data-tab="CSS">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document writte in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
        </div>
        <div data-tab="JavaScript" className="header">
          <h1 data-tab="JavaScript">JavaScript</h1>
        </div>
        <div data-tab="JavaScript" className={data.tab === 'JavaScript' ? 'text' : 'text hidden'}>
          <p data-tab="JavaScript">JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
        </div>
      </div>
    </div>
  );
}
