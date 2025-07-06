import users from '../../api/users';
import { capitalize } from '../../services/services';

interface Props {
  fieldName: string;
  value: number;
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (newValue: number) => void;
}

export const SelectField: React.FC<Props> = ({
  fieldName,
  value,
  label = capitalize(fieldName),
  placeholder = `Choose a ${fieldName}`,
  required = true,
  onChange = () => {},
}) => (
  <div className="field">
    <label htmlFor={fieldName} className="field-label">
      {label}
    </label>

    <select
      data-cy={`${fieldName}Select`}
      value={value}
      onChange={event => onChange(+event.target.value)}
    >
      <option value="0" disabled={required}>
        {placeholder}
      </option>
      {users.map(user => (
        <option value={user.id} key={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  </div>
);
