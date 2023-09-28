import { Link } from 'react-router-dom';

type RoundedButtonProps = {
  to: string;
  label: string;
  onClick?: () => void;
  className: string;
  key?: number | string;
};

function RoundedButton({
  to,
  label,
  onClick,
  className,
  key,
}: RoundedButtonProps) {
  return (
    <Link to={to} onClick={onClick} className={className} key={key}>
      {label}
    </Link>
  );
}

export default RoundedButton;
