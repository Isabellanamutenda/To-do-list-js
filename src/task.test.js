/**
 * @jest-environment jsdom
 */
/* eslint no-unused-vars: 0 */

import add from './add.js';
import removeSplice from './remove-1.js';

describe('Add/Remove', () => {
  test('Add one new item to the list', () => {
    const arr = [
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
    ];
    document.body.innerHTML = '<input id="input-text" value="Item added for test purposes">';
    add(arr);
    add(arr);
    add(arr);
    add(arr);
    expect(arr).toHaveLength(5);
  });

  test('Remove one item from the list', () => {
    const arr = [
      {
        description: 'Task 1',
        completed: false,
        index: 0,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 1,
      },
    ];
    removeSplice(arr, 0);
    expect(arr).toHaveLength(1);
  });
});
