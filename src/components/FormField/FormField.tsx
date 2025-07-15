import { capitalize } from '../../services/services';

interface Props {
  fieldName: string;
  label?: string;
  errorMessage: string;
  hasError?: boolean;
  children: React.ReactNode;
}

export const FormField: React.FC<Props> = ({
  fieldName,
  label = capitalize(fieldName),
  errorMessage,
  hasError = false,
  children,
}) => (
  <div className="field">
    <label htmlFor={fieldName} className="field-label">
      {label}
    </label>
    {children}
    {hasError && <span className="error">{errorMessage}</span>}
  </div>
);
