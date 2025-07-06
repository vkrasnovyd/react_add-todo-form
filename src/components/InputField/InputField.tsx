import classNames from 'classnames';
import { useState } from 'react';

import { capitalize } from '../../services/services';

interface Props {
  fieldName: string;
  value: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (newValue: string) => void;
}

export const InputField: React.FC<Props> = ({
  fieldName,
  value,
  label = capitalize(fieldName),
  placeholder = `Please enter a ${fieldName}`,
  required = true,
  onChange = () => {},
}) => {
  const [touched, setTouched] = useState(false);
  const hasEmptyError = required && touched && !value;

  return (
    <div className="field">
      <label htmlFor={fieldName} className="field-label">
        {label}
      </label>
      <input
        type="text"
        id={fieldName}
        data-cy={`${fieldName}Input`}
        className={classNames('input', {
          'is-danger': hasEmptyError,
        })}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
        onBlur={() => setTouched(true)}
      />
      {hasEmptyError && (
        <span className="error">This field can not be empty</span>
      )}
    </div>
  );
};
