import cn from 'classnames';

import styles from './Input.module.scss';

const Input = ({
  id,
  name,
  label = null,
  type = 'text',
  required = false,
  placeholder = '',
  customStyles = '',
}) => {
  return (
    <div className={cn(styles.container, customStyles)}>
      {label === null ? <></> : <label htmlFor={id}>{label}</label>}
      <input
        className={cn(styles.input)}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
