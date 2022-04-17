import styles from "./Button.module.scss";
import { ButtonTypes } from "../../../types/types";

const Button = ({ label, clickHandler }: ButtonTypes) => {
  return (
    <button
      title={label}
      onClick={(e) => {
        e.preventDefault();
        clickHandler();
      }}
      className={styles.button}
    >
      <div>
        <span>{label}</span>
      </div>
    </button>
  );
};

export default Button;
