import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

function App() {
  var [users, setUsers] = useState([]);

  useEffect(function() {
    axios.get("https://brian-api-test.herokuapp.com/users")
      .then(response => console.log(response.data));
  }, [setUsers]);

  return (
    <div className="App">
      {users.map(user => {
        <p key={user._id}>{user.credentials.email?.email}</p>
      })}
    </div>
  );
}

export default App;
