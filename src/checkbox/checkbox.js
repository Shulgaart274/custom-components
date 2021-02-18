import React from "react";
import PropTypes from "prop-types";
import styles from "./checkbox.module.scss";

const Checkbox = ({
  checked,
  onChange,
  size = "25px",
  color = "primary",
  labelSize = "14px",
  label = "Checkbox label",
  id,
  required,
  disabled,
}) => {
  const checkMarkTheme = () => {
    switch (color) {
      case "primary":
        return `${styles.checkmarkPrimary}`;
      case "secondary":
        return `${styles.checkmarkSecondary}`;
      case "dark":
        return `${styles.checkmarkDark}`;
      default:
        return `${styles.checkmarkPrimary}`;
    }
  };

  return (
    <label className={`${styles.customCheckbox}`}>
      <input
        id={id}
        type="checkbox"
        className={`${styles.checkboxInput}`}
        checked={checked}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
      <span
        className={checkMarkTheme()}
        style={{ width: size, height: size }}
      ></span>
      <span
        className={`${styles.checkboxLabel}`}
        style={{ fontSize: labelSize }}
      >
        {label}
      </span>
    </label>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "dark"]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  labelSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};
