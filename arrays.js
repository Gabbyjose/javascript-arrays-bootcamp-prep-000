var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'snickers'];

function addElementToBeginningOfArray(arr, beginning){
  return [beginning, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, beginning){
  arr.unshift(beginning);
  return arr;
}

function accessElementInArray (arr, index){
  return arr[index];
}