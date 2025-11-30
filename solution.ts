type FormatValueType = string | number | boolean;

const formatValue = (value: FormatValueType): FormatValueType => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

type StringOrArray = string | any[];

const getLength = (value: StringOrArray): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
};