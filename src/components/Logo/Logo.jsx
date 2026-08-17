import cn from 'classnames';

import styles from './Logo.module.scss';

const Logo = ({ customStyles = '' }) => {
   return (
      <div className={cn(styles.container, customStyles)}>
         <h3>
            <span>v</span>
            vínculo
         </h3>
      </div>
   );
};

export default Logo;
