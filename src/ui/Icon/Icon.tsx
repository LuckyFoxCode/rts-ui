import classNames from 'classnames';
import { DOMAttributes, FC } from 'react';
import { ReactComponent as Pdf } from 'ui/assets/icons/files/Pdf.svg';
import { newGuid } from 'utils';
import './Icon.scss';

export type IconType = 'Pdf';

const iconTypes = new Map([['Pdf', <Pdf key={newGuid()} />]]);

export interface IconProps extends DOMAttributes<HTMLDivElement> {
  className?: string;
  type: IconType;
}

const getIcon = (type: IconType): JSX.Element => iconTypes.get(type) as JSX.Element;

export const Icon: FC<IconProps> = ({ type, className, ...rest }) => {
  return (
    <div
      className={classNames('Icon', className)}
      {...rest}>
      {getIcon(type)}
    </div>
  );
};
