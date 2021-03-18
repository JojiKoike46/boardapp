import * as React from "react";
import * as https from "https";
import axios from "axios";

const API =
  "https://35.73.108.189/fmi/data/vLatest/databases/DataAPI_Sample/sessions";

const Users = () => {
  //const [token, setToken] = React.useState([]);

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
          Authorization: "Basic cmVzdDpwYXNzd29yZA==",
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
