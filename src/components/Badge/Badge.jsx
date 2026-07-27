import React from 'react';
import './Badge.css';

export const Badge = ({
  children,
  icon,
  variant = 'accent',
  className = '',
  ...rest
}) => {
  return (
    <span className={`badge badge--${variant} ${className}`.trim()} {...rest}>
      {icon && <span className="badge__icon">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
