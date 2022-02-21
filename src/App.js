import { useState } from 'react';
import ToDo from './ToDo';
import FormToDo from './FormToDo';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTask = () => {};

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
