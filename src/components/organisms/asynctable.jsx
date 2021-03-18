import * as React from "react";

const API =
  "https://newgate-ai.com/fmi/data/vLatest/databases/API_iijima/sessions";

const Users = () => {
  //const [token, setToken] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(API, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          Authorization: "Basic YXBpX2Rldl91c2VyOmp6QDgwU3VwcmE=",
        },
      }).then((res) => res.json());
      console.log(response.response.token);
      //setUsers(response.results);
    })();
  }, []);

  /*
  const handleClick = React.useCallback(() => {
    (async () => {
      const response = await fetch(API).then((res) => res.json());
      setUsers(response.results);
    })();
  }, []);
  */

  return <div>Hello</div>;
};

export default Users;
