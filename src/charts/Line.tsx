import React from "react";
import c3 from "c3";
import "c3/c3.css";
import { dataValues } from "../parse";

const Line = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: "#line",
      size: { height: 270, width: 530 },
      data: {
        columns: [["Marcas", ...(dataValues as number[])]],
      },
      legend: { show: false },
    });
  }, []);

  return <div id="line" />;
};

export default Line;
