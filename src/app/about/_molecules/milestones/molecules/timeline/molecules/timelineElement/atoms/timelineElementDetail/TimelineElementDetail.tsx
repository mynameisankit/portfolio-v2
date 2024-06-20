// Lodash
import _map from 'lodash/map';

// Constants
import FontIcon, { FONT_ICON } from '@molecules/fontIcon';

const TimelineElementDetail = ({ description, skills, className }: TIMELINE_ELEMENT_DETAIL_PROPS) => (
  <div className={className}>
    <div className="relative py-2 px-4 bg-secondary text-secondary text-left before:absolute before:top-3 before:left-3 before:content-[''] before:h-full before:w-full before:border-4 before:border-solid before:border-primary">
      <p className='relative z-1'>
        {description}
      </p>
    </div>

    <div className='flex gap-4 pt-8'>
      {_map(skills, icon => <FontIcon key={icon} icon={icon} className='text-36' />)}
    </div>
  </div>
);

export type TIMELINE_ELEMENT_DETAIL_PROPS = {
  description?: string,
  skills?: FONT_ICON[],
  className?: string,
};

export default TimelineElementDetail;
