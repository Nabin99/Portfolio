import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SvgProvider from "../../constants/SvgProvider";
import NavItem from "../common/NavItem/NavItem";

const NavBar = ({ navList }: { navList: string[] }): JSX.Element => {
  const [displayMenu, displayMenuSet] = useState(false);

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
  });

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
              <NavItem key={title} title={title} toggle={hideMenu} />
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
