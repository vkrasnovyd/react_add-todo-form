import users from '../../api/users';
import { capitalize } from '../../services/services';

interface Props {
  fieldName: string;
  value: number;
  label?: string;
  placeholder?: string;
  onChange?: (newValue: number) => void;
  hasError?: boolean;
  updateHasError?: (newState: boolean) => void;
}

export const SelectField: React.FC<Props> = ({
  fieldName,
  value,
  label = capitalize(fieldName),
  placeholder = `Choose a ${fieldName}`,
  onChange = () => {},
  hasError = false,
  updateHasError = () => {},
}) => (
  <div className="field">
    <label htmlFor={fieldName} className="field-label">
      {label}
    </label>

    <select
      data-cy={`${fieldName}Select`}
      value={value}
      onChange={event => {
        onChange(+event.target.value);
        updateHasError(false);
      }}
    >
      <option value="0">{placeholder}</option>
      {users.map(user => (
        <option value={user.id} key={user.id}>
          {user.name}
        </option>
      ))}
    </select>
    {hasError && (
      <span className="error">{`Please choose a ${fieldName}`}</span>
    )}
  </div>
);
