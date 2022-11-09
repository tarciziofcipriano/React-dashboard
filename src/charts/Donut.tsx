import React from "react";
import c3 from "c3";
import "c3/c3.css";
import { data } from "../data";

const Donut = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: "#donut",
      size: { height: 300, width: 380 },
      data: { ...data, type: "donut" },
    });
  }, []);

  return <div id="donut" />;
};

export default Donut;
