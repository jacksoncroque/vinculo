import cn from 'classnames';

import styles from './Input.module.scss';

const Input = ({ type = 'text', name, id, required = false, label, placeholder = '' }) => {
  return (
    <div className={cn(styles.container, styles)}>
      <label htmlFor={id}>{label}</label>
      <input
        className={cn(styles.input, styles)}
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
