const object = {
  a: 1,
  b: 5,
  c: 6,
  d: 1,
  e: 1, 
};

function getInvertedObject() {
  const invertedObject = {};

  for (let key in object) {
    if (invertedObject[object[key]] !== undefined) {
      if (!Array.isArray(invertedObject[object[key]])) {
      invertedObject[object[key]] = [invertedObject[object[key]]];
      }
      invertedObject[object[key]].push(key);
    } else {
    invertedObject[object[key]] = key;
    }
  }
  
  return invertedObject;
}

const result = getInvertedObject();

console.log(result);
