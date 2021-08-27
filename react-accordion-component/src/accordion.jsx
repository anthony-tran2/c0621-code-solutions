import React, { useState } from 'react';

const info = [
  {
    tab: 'HTML',
    language: 'Hypertext Markup Language',
    description: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    tab: 'CSS',
    language: 'Cascading Style Sheets',
    description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document writte in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    tab: 'JavaScript',
    language: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

function Header(props) {
  return (
    <div data-tab={props.tab} className="header">
      <h1 data-tab={props.tab}>{props.language}</h1>
    </div>
  );
}

function Paragraph(props) {
  return (
    <div data-tab={props.tab} className={props.activeTab === props.tab ? 'text' : 'text hidden'}>
      <p data-tab={props.tab}>{props.description}</p>
    </div>
  );
}

export default function Accordion() {

  const [data, setData] = useState({ tab: '' });

  const handleDoubleClick = e => {
    const tabValue = e.target.getAttribute('data-tab');
    if (tabValue) {
      tabValue !== data.tab ? setData({ tab: tabValue }) : setData({ tab: '' });
    }
  };

  return (
    <div className="row true-center full-height">
      <div onDoubleClick={handleDoubleClick}>
        {info.map(obj => {
          return [<Header key={obj.tab} tab={obj.tab} language={obj.language} />,
          <Paragraph key={obj.tab} tab={obj.tab} activeTab={data.tab} description={obj.description} />];
        })}
      </div>
    </div>
  );
}
