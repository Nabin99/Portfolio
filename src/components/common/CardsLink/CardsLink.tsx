import styles from "./CardsLink.module.scss";

const CardsLink = ({
  urlAddress,
  label,
}: {
  urlAddress: string;
  label: string;
}) => {
  return (
    <a className={styles.linkButton} href={urlAddress} target="_blank" title={label}>
      {label}
    </a>
  );
};

export default CardsLink;
