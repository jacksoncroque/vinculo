import cn from 'classnames';

import styles from './Button.module.scss';

const Button = ({
  label,
  onClick = () => {},
  type = 'button',
  disabled = false,
  customStyle = '',
}) => {
  return (
    <div className={cn(styles.container, customStyle)}>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
