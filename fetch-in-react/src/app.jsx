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
        return res.json()
          .then(data => {
            if (res.ok) return { users: data, error: null };
            return { users: [], error: data };
          })
          .then(result => {
            this.setState({ ...result, isLoading: false });
          })
          .catch(err => console.error(err));
      });
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
