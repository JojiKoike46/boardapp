import * as React from "react";

const Component = (props) => (
  <tr>
    <th>{props.generation}</th>
    {props.answers.map((answer, i) => (
      <td key={i}>{`${answer * 100}`}</td>
    ))}
  </tr>
);

export default Component;
