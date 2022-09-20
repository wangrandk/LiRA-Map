import { PathProperties, PointProperties } from "../models/properties";

export const DEFAULT_WIDTH = 8;
export const DEFAULT_WEIGHT = 4;
export const DEFAULT_COLOR = "red";
export const DEFAULT_OPACITY = 1.0;

export const setProperty = (
  property: keyof PointProperties,
  defaultValue: any,
  pointProperties: PointProperties | undefined,
  pathProperties: PathProperties
) => {
  return (
    (pointProperties && pointProperties[property]) ||
    pathProperties[property] ||
    defaultValue
  );
};
export const weight = (
  pointProperties: PointProperties | undefined,
  pathProperties: PathProperties
) => {
  return setProperty("weight", DEFAULT_WEIGHT, pointProperties, pathProperties);
};

export const opacity = (
  pointProperties: PointProperties | undefined,
  pathProperties: PathProperties
) => {
  return setProperty(
    "opacity",
    DEFAULT_OPACITY,
    pointProperties,
    pathProperties
  );
};

export const color = (
  pointProperties: PointProperties | undefined,
  pathProperties: PathProperties
) => {
  return setProperty("color", DEFAULT_COLOR, pointProperties, pathProperties);
};

export const width = (
  pointProperties: PointProperties | undefined,
  pathProperties: PathProperties
) => {
  return setProperty("width", DEFAULT_WIDTH, pointProperties, pathProperties);
};
