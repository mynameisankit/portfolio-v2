import { Fragment } from 'react';

// Constants
import COMPONENT_BY_ICON, { FONT_ICON } from './constants/fontIcon.fontIcon';

export type FontIconProps = {
  icon: Array<keyof FONT_ICON>,
  className?: string,
};

function FontIcon({ icon, className }: FontIconProps) {
  const Component = COMPONENT_BY_ICON[icon] || Fragment;

  return <Component className={className} />;
}

export default FontIcon;
