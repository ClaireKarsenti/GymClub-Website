import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type SmallButtonProps = {
  title?: string;
  onClick?: (e: any) => void;
  style?: React.CSSProperties;
  className?: string;
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const SmallButton = ({
  title,
  onClick,
  style,
  className,
  children,
  type,
  to,
  onMouseEnter,
  onMouseLeave,
}: SmallButtonProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (to) {
      navigate(to);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      title={title}
      onClick={handleClick}
      style={style}
      className={className}
      type={type}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default SmallButton;
