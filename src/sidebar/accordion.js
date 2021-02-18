import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Icon from "./icon";
import { SidebarItem } from "./sidebar";
import styles from "./accordion.module.scss";
import { Link } from "react-router-dom";

const Accordion = ({ item, items, theme, icons }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState(`${styles.accordionContent}`);
  const [setRotate, setRotateState] = useState(`${styles.accordionArrow}`);

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active"
        ? `${styles.accordionContent}`
        : `${styles.accordionContent} ${styles.hidden}`
    );
    setRotateState(
      setActive === "active"
        ? `${styles.accordionArrow}`
        : `${styles.accordionArrow} ${styles.rotate}`
    );
  };

  const accordionContentTheme = () => {
    switch (theme) {
      case "primary":
        return `${styles.accordionContent}`;
      case "secondary":
        return `${styles.accordionContentSecondary}`;
      case "dark":
        return `${styles.accordionContentDark}`;
      default:
        return `${styles.accordionContent}`;
    }
  };

  const accordionLinkHoverTheme = () => {
    switch (theme) {
      case "primary":
        return `${styles.accordionLinkWrapper}`;
      case "secondary":
        return `${styles.accordionLinkWrapperSecondary}`;
      case "dark":
        return `${styles.accordionLinkWrapperDark}`;
      default:
        return `${styles.accordionLinkWrapper}`;
    }
  };

  const accordionIconTheme = () => {
    switch (theme) {
      case "primary":
        return "#fff";
      case "secondary":
        return "#44bef1";
      case "dark":
        return "#f8b739";
      default:
        return "#fff";
    }
  };

  const accordionButtonTheme = () => {
    switch (theme) {
      case "primary":
        return `${styles.accordion}`;
      case "secondary":
        return `${styles.accordionSecondary}`;
      case "dark":
        return `${styles.accordionDark}`;
      default:
        return `${styles.accordion}`;
    }
  };

  const arrow = icons.find((item) => item.iconName === "arrow");

  return (
    <div className={`${styles.accordionSection}`}>
      {item.items && item.items.length ? (
        <>
          <button className={accordionButtonTheme()} onClick={toggleAccordion}>
            {item.icon ? (
              <Icon
                icons={icons}
                iconName={item.icon}
                className={`${styles.accordionIcon}`}
                width={20}
                fill={accordionIconTheme()}
              />
            ) : null}
            <p className={`${styles.accordionText}`}>{item.label}</p>
            {arrow ? (
              <Icon
                icons={icons}
                iconName={arrow.iconName}
                viewBox={arrow.viewBox}
                width={10}
                fill="#fff"
                className={`${setRotate}`}
                style={{ marginLeft: "auto" }}
              />
            ) : null}
          </button>
        </>
      ) : (
        <Link to={`/${item.itemName}`} className={accordionContentTheme()}>
          <div className={accordionLinkHoverTheme()}>
            {item.icon ? (
              <Icon
                icons={icons}
                iconName={item.icon}
                className={`${styles.accordionLinkIcon}`}
                width={20}
                fill={accordionIconTheme()}
              />
            ) : null}
            <span className={`${styles.accordionLinkText}`}>{item.label}</span>
          </div>
        </Link>
      )}
      <div className={`${setHeight}`}>
        {items &&
          items.map((item) => {
            return (
              <SidebarItem
                theme={theme}
                key={`${item.itemName}`}
                item={item}
                items={item.items}
                icons={icons}
              />
            );
          })}
      </div>
    </div>
  );
};

export default withRouter(Accordion);

Accordion.propTypes = {
  item: PropTypes.shape({
    itemName: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
  }),
  items: PropTypes.arrayOf(PropTypes.object),
};
