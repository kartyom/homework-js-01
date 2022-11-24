const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 1,
  e: 3, 
};

function getInvertObject() {
  const invertObject = {};

  for (let key in object) {
    if (invertObject[object[key]] !== undefined) {
      invertObject[object[key]] = [invertObject[object[key]]];
      invertObject[object[key]].push(key);
    } else {
    invertObject[object[key]] = key;
    }
  }
  
  return invertObject;
}

const result = getInvertObject();

console.log(result);
