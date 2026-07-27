import React from 'react';

export const SectionHeading = ({
  label,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
  ...rest
}) => {
  return (
    <div
      className={`section-header ${className}`}
      style={{ textAlign: align }}
      {...rest}
    >
      {label && <span className="section-label">{label}</span>}
      {title && (
        <h2 className="section-title">
          {title}{' '}
          {highlight && <span className="highlight">{highlight}</span>}
        </h2>
      )}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
