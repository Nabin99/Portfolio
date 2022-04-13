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
    // console.log('loading');
    // window.addEventListener('load',()=>{
    //     console.log('test');
    //     displayLoadingSet(false);
    // })
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <>
      <NavBar />
      <main className={styles.main}>{children}</main>
      {displayLoading ? <Loading /> : null}
      <FooterSection />
    </>
  );
};
export default Layout;
