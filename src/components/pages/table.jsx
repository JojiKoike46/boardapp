import * as React from "react";
import { rows } from "../../data/data";
import Thead from "../atoms/thead";
import Tbody from "../molecules/tbody";

const Component = () => (
  <div>
    <h1>健康に関する調査</h1>
    <table>
      <Thead />
      <Tbody rows={rows} />
    </table>
  </div>
);

export default Component;
