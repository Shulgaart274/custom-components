import React from "react";
import styles from "./sidebar.module.scss";
import Accordion from "./accordion";

const MenuItem = ({ item, items, icons, theme }) => {
  return (
    <div className={`${styles.menuItem}`}>
      <Accordion
        key={item.itemName}
        theme={theme}
        item={item}
        items={items}
        icons={icons}
      />
    </div>
  );
};

export default MenuItem;
