import { useState } from "react";
import { Link } from "react-router-dom";

const Button = ({
  isLink,
  normalStyle,
  hoverStyle,
  href,
  children,
  ...otherPropers
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  if (isLink) {
    return (
      <Link
        to={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={isHovered ? hoverStyle : normalStyle}
        {...otherPropers}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isHovered ? hoverStyle : normalStyle}
      {...otherPropers}
    >
      {children}
    </button>
  );
};

export default Button;
