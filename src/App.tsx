import './App.scss';
import { useState } from 'react';

import todosFromServer from './api/todos';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { Task } from './types/Task';

export const App = () => {
  const [todos, setTodos] = useState(todosFromServer);
  const [maxId, setMaxId] = useState(Math.max(...todos.map(todo => +todo.id)));
  const addTask = (newTask: Task) => {
    const newMaxId = maxId + 1;

    setTodos(currentTodos => [...currentTodos, { ...newTask, id: newMaxId }]);
    setMaxId(newMaxId);
  };

  return (
    <div className="App">
      <h1>Add todo form</h1>
      <TodoForm onSubmit={addTask} />
      <TodoList todos={todos} />
    </div>
  );
};
