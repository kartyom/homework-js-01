const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 1,
  
};

function getInvertObject() {
  const invertObject = {};

  for (let key in object) {
    if (invertObject[object[key]] === undefined) {    
      invertObject[object[key]] = [key];
    } else {
      invertObject[object[key]].push(key);
    }
  }
  
  return invertObject;
}

const result = getInvertObject();

console.log(result);