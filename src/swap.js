/* eslint max-len: 0 */
import { setStorage } from './storage.js';

export default (arr, index1, index2) => {
  [arr[index1].description, arr[index2].description] = [arr[index2].description, arr[index1].description];
  [arr[index1].completed, arr[index2].completed] = [arr[index2].completed, arr[index1].completed];
  setStorage(arr);
  return arr;
};