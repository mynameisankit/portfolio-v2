import { ReactNode } from 'react';

// Lodash
import _map from 'lodash/map';

// Components & Constants
import TimelineElement from './molecules/timelineElement';
import TIMELINE_MODE from "./constants/timeline.mode";
import ALIGNMENT from '@constants/alignment';

// Builders
import TimelineItem from './builders/TimelineItem';

const CLASSNAME_BY_MODE: Record<TIMELINE_MODE, string> = {
  [TIMELINE_MODE.VERTICAL]: 'w-5/6',
  [TIMELINE_MODE.VERTICAL_ALTERNATING]: '',
};

export const getModeClassName = (mode: TIMELINE_MODE): string => {
  const modeClassName = CLASSNAME_BY_MODE[mode];
  return modeClassName;
};

function getAlignment(index: number, mode: TIMELINE_MODE) {
  if(mode === TIMELINE_MODE.VERTICAL)
    return ALIGNMENT.RIGHT;

  const alignment = index%2 ? ALIGNMENT.RIGHT : ALIGNMENT.LEFT;
  return alignment;
};

export const renderTimelineItem = (item: TimelineItem, index: number, mode: TIMELINE_MODE): ReactNode => {
  const title = item.getTitle();
  const alignment = getAlignment(index, mode);

  return <TimelineElement key={title} item={item} alignment={alignment} />;
};
