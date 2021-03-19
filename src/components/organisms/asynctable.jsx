import * as React from "react";
import * as https from "https";
import axios from "axios";

const API = process.env.REACT_APP_BEARER_TOKEN_API;
const USER = process.env.REACT_APP_USER;
const PASSWORD = process.env.REACT_APP_PASSWORD;

const Users = () => {
  const [token, setToken] = React.useState([]);

  const BASE64_ENCODED_USER_PASSWORD = btoa(USER + ":" + PASSWORD);

  React.useEffect(() => {
    (async () => {
      /*
      const httpsAgent = new https.Agent({ rejectUnauthorized: false });
      const response = await axios
        .post(API, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic cmVzdDpwYXNzd29yZA==",
          },
          httpsAgent,
        })
        .then((res) => res.json());
        */
      const response = await fetch(API, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + BASE64_ENCODED_USER_PASSWORD,
        },
      }).then((res) => res.json());

      console.log(response.response.token);
      setToken(response.response.token);
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

  return <div>{token}</div>;
};

export default Users;
