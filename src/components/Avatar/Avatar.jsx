import cn from "classnames"

import styles from "./Avatar.module.scss"


const Avatar = ({customStyle = "", label}) => {
  return (
    <div className={cn(styles.container, customStyle)}>
      <span>{label}</span>
    </div>
  )
}

export default Avatar