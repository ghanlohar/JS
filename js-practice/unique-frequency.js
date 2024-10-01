const calcualateUniqueFrequency = (arr) => {
    let uniqueSet = new Set(arr);
    let unique = true;
    uniqueSet.forEach((item, inde) => {
      if(arr.lastIndexOf(item) !== arr.indexOf(item)) {
        unique = false;
      }
    })
    return unique;
  }
  
console.log(calcualateUniqueFrequency([1,2,3,4,5,3]));