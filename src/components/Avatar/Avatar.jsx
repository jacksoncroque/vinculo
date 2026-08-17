import cn from 'classnames';

import styles from './Avatar.module.scss';
import getNameInitials from '../../utils/getNameInitials';

const Avatar = ({ customStyle = '', label, onclick = () => {} }) => {
   return (
      <div className={cn(styles.container, customStyle)}>
         <span>{getNameInitials(label)}</span>
      </div>
   );
};

export default Avatar;
