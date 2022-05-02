import styles from "./NavBar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SvgProvider from "../../constants/SvgProvider";
import NavItem from "../common/NavItem/NavItem";

const NavBar = ({ navList }: { navList: string[] }): JSX.Element => {
  const [displayMenu, displayMenuSet] = useState(false);
  const [activeLink, activeLinkSet] = useState("/");
  const location = useLocation();

  const showMenu = () => {
    if (!displayMenu) displayMenuSet(true);
  };

  const hideMenu = () => {
    if (displayMenu) displayMenuSet(false);
  };

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 768) {
        displayMenuSet(false);
      }
    };
    let path = location.pathname;
    if (path !== activeLink) {
      activeLinkSet(path);
    }
  }, [activeLinkSet, activeLink, location]);

  return (
    <header title="Main Navigation Bar">
      <nav className={styles.container}>
        <div className={displayMenu ? styles.navWrapper : undefined}>
          <div className={styles.logo} tabIndex={-1} role="button">
            <Link title="Logo" to="/" onClick={hideMenu}>
              {SvgProvider.logo}
            </Link>
          </div>

          <div className={displayMenu ? styles.showLists : styles.lists}>
            {navList.map((title) => (
              <NavItem
                active={
                  title === "Home"
                    ? "/" === activeLink
                    : "/" + title.toLowerCase() === activeLink
                }
                key={title}
                title={title}
                toggle={() => {
                  hideMenu();
                  activeLinkSet(
                    title === "Home" ? "/" : "/#/" + title.toLowerCase()
                  );
                }}
              />
            ))}
          </div>
          <div className={styles.menu}>
            {displayMenu ? (
              <span onClick={hideMenu} tabIndex={-1} role="button">
                &#9747;
              </span>
            ) : (
              <span onClick={showMenu} tabIndex={-1} role="button">
                &#9776;
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
