import cn from 'classnames';

import styles from './ChipButton.module.scss';

const ChipButton = ({
  type = '',
  label,
  hasIcon = false,
  onClick = () => {},
  customStyle = '',
  disabled = false,
}) => {
  return (
    <button
      className={cn(styles.button, customStyle,{ [styles.buttonDisabled]: disabled })}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {hasIcon && '✓  '}
      {label}
    </button>
  );
};

export default ChipButton;
