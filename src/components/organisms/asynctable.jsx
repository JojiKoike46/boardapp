import * as React from "react";

const API = "https://randomuser.me/api/?results=5&nat=us&inc=gender,name,email";

const Users = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(API).then((res) => res.json());
      setUsers(response.results);
    })();
  }, []);

  const handleClick = React.useCallback(() => {
    (async () => {
      const response = await fetch(API).then((res) => res.json());
      setUsers(response.results);
    })();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Gender</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>
                {user.name.title}.{user.name.first} {user.name.last}
              </td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
};

export default Users;
