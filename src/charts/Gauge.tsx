import React from "react";
import c3 from "c3";
import "c3/c3.css";
import { data } from "../data";

const Gauge = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: "#gauge",
      size: { height: 300, width: 380 },
      data: { ...data, type: "gauge" },
      gauge: {
        label: {
          format: function (value, ratio) {
            return value;
          },
        },
        min: 0,
        max: 33.7,
        width: 130,
      },
    });
  }, []);

  return <div id="gauge" />;
};

export default Gauge;
