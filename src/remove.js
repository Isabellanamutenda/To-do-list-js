import { setStorage } from './storage.js';

export default (arr) => {
  const toremove = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].completed === 'true') { toremove.push(i); }
    // if (document.getElementById(i).checked) { toremove.push(i); }
  }
  let counter = 0;
  toremove.forEach((element) => {
    arr.splice(element - counter, 1);
    counter += 1;
  });
  for (let j = 0; j < arr.length; j += 1) {
    arr[j].index = j;
  }
  setStorage(arr);
  return arr;
};
