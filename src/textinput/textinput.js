import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./textinput.module.scss";

const TextInput = ({
  variant = "second",
  color = "primary",
  defaultValue = "",
  placeholder,
  disabled,
  onChange = () => {},
  onPressEnter = () => {},
  id,
  required,
  maxLength = 32,
  label,
  name,
  requiredHelper = "Textfield can't be empty!",
  widthInput = "100%",
  autoComplete,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = ({ target }) => {
    setValue(target.value);
  };

  useEffect(() => {
    onChange({ [name]: value });
  }, [value, name, onChange]);

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      onPressEnter({ [name]: value });
    }
  };

  const variantLabelHidden = () => {
    switch (variant) {
      case "first":
        return `${styles.labelHidden}`;
      case "second":
        return `${styles.labelHiddenSecond}`;
      case "third":
        return `${styles.labelHidden}`;
      case "fourth":
        return `${styles.labelHidden}`;
      default:
        return `${styles.labelHidden}`;
    }
  };

  const variantInput = () => {
    switch (variant) {
      case "first":
        return `${styles.customField}`;
      case "second":
        return `${styles.customField} ${styles.second}`;
      case "third":
        return `${styles.customField} ${styles.third}`;
      case "fourth":
        return `${styles.customField} ${styles.fourth}`;
      default:
        return `${styles.customField}`;
    }
  };

  const themeColor = () => {
    switch (color) {
      case "primary":
        return `${styles.primary}`;
      case "secondary":
        return `${styles.secondary}`;
      case "dark":
        return `${styles.dark}`;

      default:
        return `${styles.primary}`;
    }
  };

  const isLabelShown =
    value.length > 0 ? variantLabelHidden() : `${styles.label}`;

  return (
    <label
      className={`${variantInput()} ${themeColor()}`}
      style={{ width: widthInput }}
      requirederror={value.length < 1 && required ? requiredHelper : ""}
    >
      <input
        autoComplete={autoComplete}
        className={`${styles.textInput} ${themeColor()}`}
        variant={variant}
        maxLength={maxLength}
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onKeyDown={handlePressEnter}
        onChange={handleInputChange}
        value={value}
        required={required}
      />
      <span className={`${isLabelShown} ${themeColor()}`}>
        {required ? `${label}*` : label}
      </span>
      <span className={`${styles.border} ${themeColor()}`}></span>
    </label>
  );
};

export default TextInput;

TextInput.propTypes = {
  variant: PropTypes.oneOf(["first", "second", "third", "fourth"]),
  color: PropTypes.oneOf(["primary", "secondary", "dark"]),
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onPressEnter: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  name: PropTypes.string,
  requiredHelper: PropTypes.string,
  widthInput: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoComplete: PropTypes.oneOf(["off", "on"]),
};
