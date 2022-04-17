import styles from "./InputBox.module.scss";
import { InputBoxTypes } from "../../../types/types";

const InputBox = ({
  label,
  type,
  placeholder,
  name,
  setValue,
  validateInput,
  error = false,
  value,
  errorMsg,
}: InputBoxTypes) => {
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
      <input
        type={type}
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
      <span>{errorMsg}</span>
    </div>
  );
};

export default InputBox;
