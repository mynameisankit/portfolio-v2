import { ReactNode } from 'react';

// Constants
import PLACEMENT from './constants/tooltop.placement';

export type TooltipProps = {
  placement?: PLACEMENT,
  content: string,
  children: ReactNode
};
