import React, { useState } from "react";
import MenuItem from "./menuitem";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import styles from "./sidebar.module.scss";

export const SidebarItem = ({ item, items, theme, icons, ...rest }) => {
  return (
    <>
      <MenuItem
        items={items}
        item={item}
        theme={theme}
        icons={icons}
        {...rest}
      />
    </>
  );
};

const Sidebar = ({
  items,
  sidebarLogo,
  sidebarTitle = "Business",
  theme = "primary",
  icons,
}) => {
  const [setActive, setActiveState] = useState("");
  const [collapse, setCollapse] = useState(`${styles.sidebar}`);
  const [secondaryCollapse, setSecondaryCollapse] = useState(
    `${styles.sidebarSecondary}`
  );
  const [darkCollapse, setDarkCollapse] = useState(`${styles.sidebarDark}`);

  const [buttonCollapse, setButtonCollapse] = useState(
    `${styles.sidebarCollapseWrapper}`
  );

  const collapseHandler = () => {
    setActiveState(setActive === "" ? "active" : "");
    setButtonCollapse(
      setActive === "active"
        ? `${styles.sidebarCollapseWrapper}`
        : `${styles.sidebarCollapseWrapper} ${styles.buttonCollapsed}`
    );
    switch (theme) {
      case "primary":
        return setCollapse(
          setActive === "active"
            ? `${styles.sidebar}`
            : `${styles.sidebar} ${styles.collapsed}`
        );
      case "secondary":
        return setSecondaryCollapse(
          setActive === "active"
            ? `${styles.sidebarSecondary}`
            : `${styles.sidebarSecondary} ${styles.collapsed}`
        );
      case "dark":
        return setDarkCollapse(
          setActive === "active"
            ? `${styles.sidebarDark}`
            : `${styles.sidebarDark} ${styles.collapsed}`
        );
      default:
        return setCollapse(
          setActive === "active"
            ? `${styles.sidebar}`
            : `${styles.sidebar} ${styles.collapsed}`
        );
    }
  };

  const sidebarTheme = () => {
    switch (theme) {
      case "primary":
        return collapse;
      case "secondary":
        return secondaryCollapse;
      case "dark":
        return darkCollapse;
      default:
        return collapse;
    }
  };

  const sidebarButtonTheme = () => {
    switch (theme) {
      case "primary":
        return `${styles.sidebarCollapse}`;
      case "secondary":
        return `${styles.sidebarCollapseSecondary}`;
      case "dark":
        return `${styles.sidebarCollapseDark}`;
      default:
        return `${styles.sidebarCollapse}`;
    }
  };

  return (
    <div className={sidebarTheme()}>
      <div className={`${buttonCollapse}`}>
        <button className={sidebarButtonTheme()} onClick={collapseHandler}>
          <span className={`${styles.sidebarHamburger}`}>
            <hr className={`${styles.line1}`} />
            <hr className={`${styles.line2}`} />
            <hr className={`${styles.line3}`} />
          </span>
        </button>
      </div>
      <div className={`${styles.sidebarTitleWrapper}`}>
        {sidebarLogo ? (
          <Link className={`${styles.sidebarLink}`} to="/">
            <img
              src={sidebarLogo}
              alt="logo"
              className={`${styles.sidebarLogo}`}
            />
          </Link>
        ) : (
          <Link className={`${styles.sidebarLink}`} to="/">
            <h2 className={`${styles.sidebarTitle}`}>{sidebarTitle}</h2>
          </Link>
        )}
      </div>
      <div className={`${styles.list}`}>
        {items.map((sidebarItem, index) => (
          <SidebarItem
            theme={theme}
            key={`${sidebarItem.itemName}${index}`}
            item={sidebarItem}
            items={sidebarItem.items}
            icons={icons}
          />
        ))}
      </div>
    </div>
  );
};

export default withRouter(Sidebar);

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  sidebarLogo: PropTypes.string,
  sidebarTitle: PropTypes.string,
  theme: PropTypes.oneOf(["primary", "secondary", "dark"]),
};

SidebarItem.propTypes = {
  item: PropTypes.shape({
    itemName: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
  }),
  items: PropTypes.arrayOf(PropTypes.object),
};
