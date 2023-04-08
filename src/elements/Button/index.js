import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = (props) => {
  // Destructure properties from props
  const {
    type,
    onClick,
    target,
    className,
    href,
    isDisabled,
    isLoading,
    isSmall,
    isLarge,
    isBlock,
    isExternal,
    hasShadow,
    style,
    children,
    isPrimary,
  } = props;

  // Initialize buttonClassName array with "btn" and the provided className
  const buttonClassName = ["btn", className];

  // Add specific classNames based on provided props
  if (isPrimary) buttonClassName.push("btn-primary");
  if (isLarge) buttonClassName.push("btn-lg");
  if (isSmall) buttonClassName.push("btn-sm");
  if (isBlock) buttonClassName.push("btn-block");
  if (hasShadow) buttonClassName.push("btn-shadow");

  // Handle button click event
  const handleClick = () => {
    if (onClick) onClick();
  };

  // If button is disabled or in loading state, render as a span element
  if (isDisabled || isLoading) {
    if (isDisabled) buttonClassName.push("disabled");
    return (
      <span className={buttonClassName.join(" ")} style={style}>
        {isLoading ? (
          // Display loading indicator
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          // Display button content
          children
        )}
      </span>
    );
  }

  // If type is 'link', render an anchor or Link element depending on whether it's an external or internal link
  if (type === "link") {
    if (isExternal) {
      // Render external link as an anchor element
      return (
        <a
          href={href}
          className={buttonClassName.join(" ")}
          style={style}
          target={target === "_blank" ? "_blank" : undefined}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    } else {
      // Render internal link as a Link element
      return (
        <Link
          to={href}
          className={buttonClassName.join(" ")}
          style={style}
          onClick={handleClick}
        >
          {children}
        </Link>
      );
    }
  }

  // Render a button element for other cases
  return (
    <button
      className={buttonClassName.join(" ")}
      style={style}
      onClick={handleClick}
      disabled={isDisabled || isLoading}
    >
      {children}
    </button>
  );
};

// Define prop types for Button component
Button.propTypes = {
  type: PropTypes.oneOf(["link", "button"]),
  onClick: PropTypes.func,
  target: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  isExternal: PropTypes.bool,
  hasShadow: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node,
  isPrimary: PropTypes.bool,
};

export default Button;
