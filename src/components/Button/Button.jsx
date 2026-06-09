import cn from 'classnames';

import styles from './Button.module.scss';

const Button = ({ label, onClick = () => {}, type = 'button', style = '', disabled = false }) => {
  return (
    <div className={cn(styles.container, style)}>
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
