import styles from "./Loading.module.scss";
import SvgProvider from "../../constants/SvgProvider";

const Loading = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.displayFlex}>
        <div className={styles.svgLogo}>{SvgProvider.logo}</div>
        <div className={styles.message}>LOADING</div>
      </div>
      <div className={styles.svgBackground}></div>
    </div>
  );
};

export default Loading;
