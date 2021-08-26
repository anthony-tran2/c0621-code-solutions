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
//         <input value={this.state.email} onChange={this.handleChange} type="text"/>
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//     );
//   }
// }

function Form() {
  const [state, setValue] = useState({ email: '' });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('state:', state);
  };

  const handleChange = e => {
    setValue({ email: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input value={state.email} onChange={handleChange} type="text"/>
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
