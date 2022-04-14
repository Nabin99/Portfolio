import styles from "./TextAreaBox.module.scss";

interface TextAreaBoxTypes {
  label: string;
  placeholder: string;
  name: string;
  setValue: React.Dispatch<string>;
  error: boolean;
  value: string;
}

const TextAreaBox = ({
  label,
  placeholder,
  name,
  setValue,
  error = false,
  value,
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
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
};

export default TextAreaBox;
