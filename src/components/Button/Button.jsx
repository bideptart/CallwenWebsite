import React from 'react';
import './Button.css';

/**
 * Reusable Button Component for Callwen Website
 * 
 * @param {Object} props
 * @param {'primary'|'secondary'|'ghost'} [props.variant='primary']
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {React.ReactNode} [props.children]
 * @param {React.ReactNode} [props.icon]
 * @param {string} [props.href]
 * @param {function} [props.onClick]
 * @param {string} [props.className]
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  href,
  onClick,
  className = '',
  ...rest
}) => {
  const classNames = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classNames} {...rest}>
        <span>{children}</span>
        {icon && <span className="btn__icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} onClick={onClick} {...rest}>
      <span>{children}</span>
      {icon && <span className="btn__icon">{icon}</span>}
    </button>
  );
};

export default Button;
