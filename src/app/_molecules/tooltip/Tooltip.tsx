'use client';

import { Fragment, useId } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

// Lodash
import _replace from 'lodash/replace';

// Constants
import PLACEMENT from './constants/tooltop.placement';

// Types
import type { TooltipProps } from './type';

// Styles
import 'react-tooltip/dist/react-tooltip.css';
import './tooltip.css';

function Tooltip({ placement = PLACEMENT.TOP, content, children }: TooltipProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const id = useId();

  const className = _replace(id, /:/g, '');

  return (
    <Fragment>
        <ReactTooltip anchorSelect={`.${className}`} content={content} place={placement} className='tooltip' openOnClick />
        <div className={className}>
          {children}
        </div>
    </Fragment>
  );
}

export default Tooltip;
