import styles from "./Button.module.scss";

interface ButtonTypes {
  label: string;
  clickHandler: () => void;
}

const Button = ({ label, clickHandler }: ButtonTypes) => {
  return (
    <button onClick={clickHandler} className={styles.button}>
      <div>
        <span>{label}</span>
      </div>
    </button>
  );
};

export default Button;
