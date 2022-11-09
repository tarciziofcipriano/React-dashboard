import React from "react";
import c3 from "c3";
import "c3/c3.css";
import { dataKeys, dataValues } from "../parse";

const Bar = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: "#bar",
      size: { height: 180, width: 530 },
      data: {
        x: "x",
        columns: [
          ["x", ...(dataKeys as string[])],
          ["data1", ...(dataValues as number[])],
        ],
        type: "bar",
        colors: {
          Porsche: "blue",
          "Louis Vuitton": "red",
          Gucci: "green",
          Chanel: "purple",
          Hermès: "yellow",
          Cartier: "black",
          Dior: "orange",
          Rolex: "aqua",
          Ferrari: "coral",
          "Estée Lauder": "pink",
        },
      },
      axis: {
        x: {
          type: "category",
        },
        y: {
          max: 38,
          padding: {
            top: 0,
            bottom: 0,
          },
          tick: {
            values: [0, 100],
          },
        },
      },
      legend: {
        show: false,
      },
      bar: {
        width: {
          ratio: 0.5,
        },
      },
    });
  }, []);

  return <div id="bar" />;
};

export default Bar;
