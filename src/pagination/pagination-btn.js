import React, { useRef, useState } from "react";
import styles from "./pagination.module.scss";

const PaginationButton = ({
  className,
  disabled,
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

  return (
    <button
      ref={button}
      onMouseDown={onMouseDown}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onSubmit={onSubmit}
      className={className}
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

export default PaginationButton;
