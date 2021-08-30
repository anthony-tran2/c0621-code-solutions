import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) return console.error(res); else return res.json();
      })
      .then(res => {
        this.setState(prev => (
          {
            users: res,
            isLoading: !prev.isLoading
          }));
      })
      .catch(err => console.error(err));
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
