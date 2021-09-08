import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

function Characters(props) {


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const location = useLocation();
  useEffect(() => {
    console.log(location.state);
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p> {user.name} </p>
            <img src={user.image} alt={user.name} />
          </li>
        ))}
      </ul>
    );
  }
}
export default Characters;
