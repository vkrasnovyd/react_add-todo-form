import { TodoInfo } from '../TodoInfo';
import { Task } from '../../types/Task';

export const TodoList = ({ todos }: { todos: Task[] }) => (
  <section className="TodoList">
    {todos.map(todo => {
      return <TodoInfo todo={todo} key={todo.id} />;
    })}
  </section>
);
