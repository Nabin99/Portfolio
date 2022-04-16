import styles from "./TextAreaBox.module.scss";

interface TextAreaBoxTypes {
  label: string;
  placeholder: string;
  name: string;
  setValue: React.Dispatch<string>;
  validateInput: {
    (e: string): void;
  };
  error: boolean;
  value: string;
  errorMsg: string;
}

const TextAreaBox = ({
  label,
  placeholder,
  name,
  setValue,
  validateInput,
  error = false,
  value,
  errorMsg,
}: TextAreaBoxTypes) => {
  return (
    <div
      className={
        !error
          ? styles.inputWrapper
          : [styles.inputWrapper, styles.error].join(" ")
      }
    >
      <label htmlFor={name}>
        <b>{label}:</b>
      </label>
      <textarea
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onBlur={(e) => setValue(e.target.value.trim())}
        onChange={(e) => {
          setValue(e.target.value);
          validateInput(e.target.value);
        }}
        required
      />
      <span className={styles.error}>{errorMsg}</span>
    </div>
  );
};

export default TextAreaBox;
