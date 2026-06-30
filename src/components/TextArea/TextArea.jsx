import styles from './TextArea.module.scss';

const TextArea = ({ name, id, maxLength = 500, placeholder, onChange = () => {}, value = "" }) => {
  return (
    <div className={styles.container}>
      <textarea
        name={name}
        id={id}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextArea;
