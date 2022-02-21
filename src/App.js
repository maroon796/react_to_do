import { useState } from 'react';
import ToDo from './ToDo';
import FormToDo from './FormToDo';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTask = () => {};

  const removeTask = () => {};

  const removeToggle = () => {};

  return (
    <div className="App">
      <header>
        <h1>ToDo List: {todoItems.length}</h1>
      </header>
      <FormToDo />
      {todoItems.map((todo) => {
        return <ToDo key={todo.id} />;
      })}
    </div>
  );
}

export default App;
