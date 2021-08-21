import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData () {
      const getData = await fetch('https://api.github.com/users/EstebanToloza');
      const dataToJson = await getData.json()

      setUser(dataToJson);
      console.log(dataToJson)
  }

  return (
    <div className="App">
      <div>{user.login}</div>
      <div>{user.type}</div>
      <div>{user.public_repos}</div>
    </div>
  );
}

export default App;
