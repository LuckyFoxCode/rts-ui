import classNames from 'classnames';
import { DOMAttributes, FC } from 'react';
import './Button.scss';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  typeButton?: ButtonType;
  onClick?: (event: React.MouseEvent) => void;
}

export const Button: FC<ButtonProps> = ({
  className,
  isDisabled,
  typeButton,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classNames('Button', className, { Button__disabled: isDisabled })}
      disabled={isDisabled}
      onClick={onClick}
      type={typeButton}
      {...rest}></button>
  );
};
