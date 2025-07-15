import users from '../../api/users';
import { capitalize } from '../../services/services';
import { FormField } from '../FormField';

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
  <FormField
    fieldName={fieldName}
    label={label}
    errorMessage={`Please choose a ${fieldName}`}
    hasError={hasError}
  >
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
  </FormField>
);
