import classNames from 'classnames';

import { capitalize } from '../../services/services';

interface Props {
  fieldName: string;
  value: string;
  label?: string;
  placeholder?: string;
  onChange?: (newValue: string) => void;
  hasError?: boolean;
  updateHasError?: (newState: boolean) => void;
}

export const InputField: React.FC<Props> = ({
  fieldName,
  value,
  label = capitalize(fieldName),
  placeholder = `Please enter a ${fieldName}`,
  onChange = () => {},
  hasError = false,
  updateHasError = () => {},
}) => (
  <div className="field">
    <label htmlFor={fieldName} className="field-label">
      {label}
    </label>
    <input
      type="text"
      id={fieldName}
      data-cy={`${fieldName}Input`}
      className={classNames('input', {
        'is-danger': hasError,
      })}
      value={value}
      placeholder={placeholder}
      onChange={event => {
        onChange(event.target.value);
        updateHasError(false);
      }}
    />
    {hasError && <span className="error">{`Please enter a ${fieldName}`}</span>}
  </div>
);
