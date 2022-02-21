import { useState } from 'react';
import ToDo from './ToDo';
import FormToDo from './FormToDo';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTask = (input) => {
    if (input) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 8),
        task: input,
        complete: false,
      };
      setTodoItems([...todoItems, newItem]);
    }
  };

  const removeTask = () => {};

  const handleToggle = () => {};

  return (
    <div className="App">
      <header>
        <h1>ToDo List: {todoItems.length}</h1>
      </header>
      <FormToDo addTask={addTask} />
      {todoItems.map((todo) => {
        return <ToDo todo={todo} key={todo.id} toggleTask={handleToggle} removeTask={removeTask} />;
      })}
    </div>
  );
}

export default App;
