import { data } from "./data";

// Valores dos gráficos
export const dataKeys =
  data.columns &&
  (data.columns.map((o) => {
    return o[0];
  }) as string[]);

export const dataValues =
  data.columns &&
  (data.columns.map((o) => {
    return o[1];
  }) as number[]);

// Valores da tabela
export const dataValuesTable =
  data.columns &&
  data.columns.map((o, i) => {
    return { id: i + 1, key: o[0], value: o[1] };
  });

// Maior valor da dataValues
export const highest = dataValues && Math.max(...dataValues);

// Menor valor da dataValues
export const lowest = dataValues && Math.min(...dataValues);

const highestIndex = highest && (dataValues?.indexOf(highest) as number);
const lowestIndex = lowest && (dataValues?.indexOf(lowest) as number);

// Maior valor da dataKeys
export const highestKey = (dataKeys as string[])[
  highestIndex as number
] as string;

// Menor valor da dataKeys
export const lowestKey =
  dataKeys && lowestIndex && (dataKeys[lowestIndex] as string);
