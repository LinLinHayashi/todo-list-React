import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';
import './styles.css';
import { useState, useEffect } from 'react';

/* Remember that hooks cannot be run inside an "if" condition or "for" loop, etc. */

export default function App() {

  /* The initial state of "todos" is set to be what's in the local storage with name "ITEMS". */
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  /* Run the function everytime "[todos]" changes, i.e., after "[todos]" changes, always store it in the local storage with name "ITEMS". */
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  /* Add the new item to the array using Hooks. */
  function addTodo(title) {
    setTodos(prevTodos => { // Use this way if we need to set the state based on the previous state.
      return [
        ...prevTodos,
        {id: crypto.randomUUID(), title, completed: false}
      ]; // Hooks cannot directly modify a state; it can only create and return a new state to replace the old state!!!
    });
  }

  /* Given the id of an item, change the "completed" attribute of it. */
  function toggleTodo(id, checked) {
    setTodos(prevTodos => { // Use this way if we need to set the state based on the previous state.
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: checked}; // Hooks cannot directly modify a state; it can only create and return a new state to replace the old state!!!
        }
        return todo;
      });
    });
  }

  /* Given the id of an item, delete it from the array. */
  function deleteTodo(id) {
    setTodos(prevTodos => { // Use this way if we need to set the state based on the previous state.
      return prevTodos.filter(todo => todo.id !== id); // This is the condition for keeping "todo". Also, Hooks cannot directly modify a state; it can only create and return a new state to replace the old state!!!
    });
  }
  
  return (
    <>
      <NewTodoForm onSubmit={addTodo}/> {/* Pass down the function to the "NewTodoForm" component as an attribute. The "NewTodoForm" function needs to take a parameter to accept it. */}
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/> {/* Pass down an array and two functions to the "TodoList" component as three attributes. The "TodoList" function needs to take three parameters to accept them. */}
    </>
  );
}