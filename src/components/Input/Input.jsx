import cn from 'classnames';

import styles from './Input.module.scss';

const Input = ({ type = 'text', name, id, required = false, label, placeholder = '' }) => {
  return (
    <input
      className={cn(styles.input, styles)}
      type={type}
      name={name}
      id={id}
      label={label}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
