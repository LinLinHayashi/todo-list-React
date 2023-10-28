import { TodoItem } from './TodoItem';

/* This component shows how "todos" looks like on the page. */

export function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ul className='list'>
      {todos.length === 0 && 'No Todos'}
      {todos.map(todo => {
        return (
          <
            /* Insert the "TodoItem" component with the following attributes. The "TodoItem" function needs to take parameters to accept them. */
            TodoItem {...todo} // This means all attributes of "todo", i.e., completed, id, and title. 
            key={todo.id} // A special attribute required by React.
            toggleTodo={toggleTodo} // This attribute takes the "toggleTodo" function passed down from the "App" component.
            deleteTodo={deleteTodo} // This attribute takes the "deleteTodo" function passed down from the "App" component.
          />
        )
      })}
    </ul>
  );
}