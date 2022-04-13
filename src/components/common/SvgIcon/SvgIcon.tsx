import styles from "./SvgIcon.module.scss";

interface SvgIconTypes {
  title: string;
  children: JSX.Element;
  address?:string;
}

const SvgIcon = ({ title, children, address}: SvgIconTypes) => {
  return (
      <a href={address} title={title}>
    <div className={styles.imageWrapper}>
      {children}
    </div>
    </a>
  );
};

export default SvgIcon;
