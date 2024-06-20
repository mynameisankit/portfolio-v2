// Lodash
import _map from 'lodash/map';

// Constants
import TIMELINE_MODE from "./constants/timeline.mode";

// Helpers
import { getModeClassName, renderTimelineItem } from './timeline.helpers';

// Builders
import TimelineItem from './builders/TimelineItem';

function Timeline({ items, mode = TIMELINE_MODE.VERTICAL_ALTERNATING }: TimelineProps) {
  const modeClassName = getModeClassName(mode);

  return (
    <div className={`relative flex flex-col gap-8 mx-12 ${modeClassName}`}>
      <div className='h-full absolute top-0 lg:left-1/2 left-14 bg-secondary w-1' />

      {_map(items, (item: TimelineItem, index: number) => renderTimelineItem(item, index, mode))}
    </div>
  );
};

export type TimelineProps = {
  items: Array<TimelineItem>,
  mode?: TIMELINE_MODE,
};

export default Timeline;
