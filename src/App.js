import { useState } from 'react';
import './App.css';
import Form from './components/form-components';
import UserDetails from './components/user-details-component';

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user: ', error));
  };

  return (
    <>
      <Form search={handleSearch} />
      <UserDetails user={user} />
    </>
  );
}

export default App;
