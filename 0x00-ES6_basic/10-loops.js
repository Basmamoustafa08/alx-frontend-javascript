export default function appendToEachArrayValue(array, appendString) {
  const newArry = []; 
  for (let value of array) {
    newArry.push(appendString + value);
  }
  

  return newArry;
}
