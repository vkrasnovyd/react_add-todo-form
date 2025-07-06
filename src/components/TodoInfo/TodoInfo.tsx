import classNames from 'classnames';

import users from '../../api/users';
import { UserInfo } from '../UserInfo';
import { Task } from '../../types/Task';

export const TodoInfo = ({ todo }: { todo: Task }) => {
  const user = users.find(el => el.id === todo.userId);

  return (
    <article
      data-id={todo.id}
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={user} />
    </article>
  );
};
