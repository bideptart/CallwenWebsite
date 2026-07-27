import React from 'react';
import './Card.css';

export const Card = ({
  icon,
  title,
  description,
  children,
  className = '',
  variant = 'default',
  ...rest
}) => {
  return (
    <div className={`card card--${variant} ${className}`.trim()} {...rest}>
      {icon && <div className="card__icon">{icon}</div>}
      {title && <h3 className="card__title">{title}</h3>}
      {description && <p className="card__description">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
