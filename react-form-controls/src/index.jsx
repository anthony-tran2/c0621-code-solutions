import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.state = {
//       email: ''
//     };
//   }

//   handleChange(e) {
//     this.setState({ email: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     console.log('state:', this.state);
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//       <label>
//         Email
//         <input onChange={this.handleChange} type="text"/>
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//     );
//   }
// }

function Form() {
  const [state, setValue] = useState({ email: '' });

  return (
    <form onSubmit={e => {
      e.preventDefault();
      console.log('state:', state);
    }}>
      <label>
        Email
        <input onChange={e => setValue({ value: e.target.value })} type="text"/>
      </label>
      <button type="submit">Submit</button>
    </form>
  );

}

ReactDOM.render(
  <Form />,
  document.querySelector('#root')
)
;
