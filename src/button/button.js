import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

const Button = ({
  disabled,
  variant = "primary",
  size = "md",
  width,
  onClick,
  onSubmit,
  children,
  type = "button",
}) => {
  const [state, setState] = useState("");
  const [rippleStyle, setRippleStyle] = useState({});

  let timerId;
  const ripple = useRef(null);
  const button = useRef(null);

  const onMouseDown = (e) => {
    setState("");
    clearTimeout(timerId);

    const size = button.current.offsetWidth;
    const pos = button.current.getBoundingClientRect();

    const x = e.pageX - pos.left - size;
    const y = e.pageY - pos.top - size;

    const newRippleStyle = {
      top: `${y}px`,
      left: `${x}px`,
      width: `${size * 2}px`,
      height: `${size * 2}px`,
    };

    setRippleStyle(newRippleStyle);

    setState(`${styles.rippleStart} ${styles.rippleActive}`);
    timerId = setTimeout(() => {
      setState("");
    }, 500);
  };

  const btnVariant = () => {
    switch (variant) {
      case "primary":
        return `${styles.btn}`;
      case "secondary":
        return `${styles.btnSecondary}`;
      case "dark":
        return `${styles.btnDark}`;
      case "disabled":
        return `${styles.btnDisabled}`;
      default:
        return `${styles.btn}`;
    }
  };

  const btnSize = () => {
    switch (size) {
      case "sm":
        return `${styles.btnSizeSm}`;
      case "md":
        return `${styles.btnSizeMd}`;
      case "lg":
        return `${styles.btnSizeLg}`;
      default:
        return `${styles.btnSizeMd}`;
    }
  };

  return (
    <button
      style={{ width: width }}
      ref={button}
      onMouseDown={onMouseDown}
      className={`${btnVariant()}
       ${btnSize()}`}
      type={type}
      disabled={variant === "disabled" || disabled ? true : false}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      <span
        ref={ripple}
        style={rippleStyle}
        className={`${styles.ripple} ${state}`}
      ></span>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "dark", "disabled"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
