import { useState } from 'react';

/* Here "NewTodoForm" is a function while it is also a React component, so make sure the function name and the file name are the same. */

export function NewTodoForm(props) {
  const [newItem, setNewItem] = useState(''); // The initial value of "newItem" is empty.

  function handleSubmit(event) {
    event.preventDefault(); // Prevent submitting the form from refreshing the page.

    if (newItem === '') return; // If "newItem" is empty, then we don't do anything.
    props.onSubmit(newItem); // This means the "onSubmit" attribute of "NewTodoForm" is taking "newItem" as a parameter, i.e., the "addTodo" function in the "App" component is taking "newItem" as a parameter.

    setNewItem(''); // Reset "newItem" to empty.
  }

  return (
    <form className='new-item-form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input
          type='text'
          id='item'
          value={newItem} // 2. This assigns the value of "newItem" to the "value" attribute, i.e., show what's being typed on the page.
          onChange={event => setNewItem(event.target.value)} // 1. This assigns what's being typed in this <input/> element to "newItem" and runs the components.
        />
      </div>
      <button className='btn'>Add</button>
    </form>
  );
}