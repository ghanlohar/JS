const IsArrayWithUniqueFreqofEachElement = (arr) => {
  const map = new Map();
  arr.forEach(element => {
    if(map.has(element)){
      map.set(element, map.get(element) + 1);
    }
    else {
      map.set(element, 1);
    }
  });
  console.log(map.entries());
  let uniqueSet = new Set();
  for(let [key, value] of map.entries()) {
    if(uniqueSet.has(value)) {
      return false;
    }
    else {
      uniqueSet.add(value);
    }
  }
  return true;
}
IsArrayWithUniqueFreq([1,2,3,2,3,4]); // false

IsArrayWithUniqueFreq([1,2,2,3,3,3]); // true
