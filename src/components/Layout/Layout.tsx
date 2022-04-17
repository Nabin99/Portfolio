import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
import FooterSection from "./Footer/Footer";
import styles from "./Layout.module.scss";

interface layoutTypes {
  children: JSX.Element;
}

const Layout = ({ children }: layoutTypes) => {
  const [displayLoading, displayLoadingSet] = useState(true);

  useEffect(() => {
    let id = setTimeout(() => {
      displayLoadingSet(false);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <>
      <NavBar navList={navList} />
      <main className={styles.main}>{children}</main>
      {displayLoading ? <Loading /> : null}
      <FooterSection />
    </>
  );
};
export default Layout;

const navList: string[] = [
  "Home",
  "About",
  "Skills",
  "Works",
  "Blog",
  "Contact",
];
