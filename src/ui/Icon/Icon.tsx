import { CSSProperties, FC, FunctionComponent, SVGProps } from 'react';
import * as iconComponents from './icons';
import { IconType } from './types';

export interface IconProps {
  className?: string;
  name: IconType;
  size?: number;
  style?: CSSProperties;
}

export const Icon: FC<IconProps> = ({ name, className, style, size, ...rest }) => {
  const IconComponent =
    (iconComponents[name as keyof typeof iconComponents] as FunctionComponent<
      SVGProps<SVGSVGElement>
    >) || null;

  return (
    IconComponent && (
      <IconComponent
        {...rest}
        data-name={name}
        className={className}
        style={{ ...style, width: size, height: size }}
      />
    )
  );
};
