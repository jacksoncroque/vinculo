import cn from 'classnames';

import styles from './Card.module.scss';

const Card = ({ children, customStyle }) => {
   return <div className={cn(styles.container, customStyle)}>{children}</div>;
};

export default Card;
