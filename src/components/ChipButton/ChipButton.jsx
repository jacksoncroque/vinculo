import cn from 'classnames';

import styles from './ChipButton.module.scss';

const ChipButton = ({
  type = '',
  label,
  hasIcon = false,
  onClick = () => {},
  customStyle = '',
}) => {
  return (
    <button
      className={cn(styles.button, customStyle)}
      type={type}
      onClick={onClick}
    >
      {hasIcon && "✓  "}
      {label}
    </button>
  );
};

export default ChipButton;
