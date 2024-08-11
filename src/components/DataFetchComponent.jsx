import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchComponent() {
  const [users, setUsers] = useState([]);

  function getUsers() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  const [user, setUser] = useState({});
  const [id, setId] = useState(1);

  const getSingleUserById = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserById();
  }, [id]);
  return (
    <div>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            style={{
              border: "1px solid red",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      })}

      <div>
        {user.name}
        {user.email}
      </div>
      <button
        onClick={() => {
          if (id === 10) return;

          setId((prev) => prev + 1);
        }}
      >
        Get User {id + 1}
      </button>
    </div>
  );
}

export default DataFetchComponent;
