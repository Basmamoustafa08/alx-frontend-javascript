export default function cleanSet(set, startString) {
  if (
    !set &&
    !startString &&
    !(set instanceof Set) &&
    typeof startString !== "string"
  ) {
    return "";
  }

  const arr = [];

  for (const value of set.values()) {
    if (typeof value === "string" && value.startsWith(startString)) {
      const newValue = value.substring(startString.length);

      if (newValue && newValue !== value) {
        arr.push(newValue);
      }
    }
  }
  return arr.join("-");
}
