import clsx from 'clsx';

// Constants
import { FONT_ICON } from '@molecules/fontIcon';
import ALIGNMENT from '@constants/alignment';

// Builders
import TimelineItem from "../../builders/TimelineItem";

// Components
import TimelineElementDetail from './atoms/timelineElementDetail';
import TimelineIcon from './atoms/timelineIcon';

function TimelineElement({ item, alignment, className = '' }: TIMELINE_ELEMENT_PROPS) {
  const title = item.getTitle();
  const subtitle = item.getSubTitle();
  const time = item.getTime();
  const skills = item.getSkills();
  const description = item.getDescription();

  return (
    <div className={`relative grid mx-8 flex-col auto-rows-auto grid-cols-12 ${className}`}>
      <div className={clsx('col-start-2 lg:col-span-6 col-span-6', {
        'lg:col-start-8 lg:order-2': alignment === ALIGNMENT.RIGHT,
      })}>
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
      </div>

      <div className={clsx('lg:row-span-2 col-span-5', {
        'lg:col-start-8': alignment === ALIGNMENT.LEFT,
        'lg:order-1': alignment === ALIGNMENT.RIGHT,
      })}>
        <div className={clsx('flex items-center h-full flex-row-reverse', {
          'lg:!flex-row': alignment === ALIGNMENT.LEFT,
        })}>
          <h1>{time}</h1>
        </div>
      </div>

      <TimelineIcon item={item} className="absolute z-2 lg:left-1/2 top-1/2 lg:-translate-x-1/2 -translate-y-1/2" />

      <TimelineElementDetail
        description={description}
        skills={skills}
        className={clsx('col-start-2 lg:col-span-5 col-span-11', {
          'lg:col-start-8 lg:order-2': alignment === ALIGNMENT.RIGHT,
        })}
      />
    </div>
  );
}

export type TIMELINE_ELEMENT_PROPS = {
  item: TimelineItem,
  alignment: ALIGNMENT,
  className?: string,
};

export default TimelineElement;
