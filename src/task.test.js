/**
 * @jest-environment jsdom
 */
/* eslint no-unused-vars: 0 */

import add from './add.js';
import removeSplice from './remove-1.js';
import editItem from './edit.js';

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

describe('Edit/Checkbox/Swap/Clear', () => {
  test('Edit a task description', () => {
    document.body.innerHTML = '<input id="change0" value="This is an edit of task at index 0">';
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
    editItem(arr, 0);
    expect(arr[0].description).toBe('This is an edit of task at index 0');
  });
});
