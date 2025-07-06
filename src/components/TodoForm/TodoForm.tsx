import React, { useState } from 'react';

import { Task } from '../../types/Task';
import { InputField } from '../InputField';
import { SelectField } from '../SelectField';

interface Props {
  onSubmit: (newTask: Task) => void;
}

export const TodoForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState(0);
  const [count, setCount] = useState(0);
  const isFormFilled = title && userId;
  const clearForm = () => {
    setTitle('');
    setUserId(0);
    setCount(() => count + 1);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!isFormFilled) {
      return;
    }

    const task: Task = {
      id: 0,
      title: title,
      completed: false,
      userId: userId,
    };

    onSubmit(task);
    clearForm();
  };

  return (
    <form key={count} onSubmit={handleSubmit}>
      <InputField fieldName="title" value={title} onChange={setTitle} />
      <SelectField fieldName="user" value={userId} onChange={setUserId} />

      <button type="submit" data-cy="submitButton" disabled={!isFormFilled}>
        Add
      </button>
    </form>
  );
};
