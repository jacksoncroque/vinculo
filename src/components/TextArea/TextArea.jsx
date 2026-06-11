
import styles from "./TextArea.module.scss"

const TextArea = ({ name, id, maxLength = 500, placeholder }) => {
  return (
    <div className={styles.container}>
      <textarea
        name={name}
        id={id}
        maxLength={maxLength}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
