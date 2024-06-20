import { ReactNode } from 'react';
import Image from 'next/image';

// Builders
import type TimelineItem from '../../../../builders/TimelineItem';

// Components
import FontIcon, { FONT_ICON } from '@molecules/fontIcon';

const renderIcon = (item: TimelineItem) => {
  const media = item.getMedia();

  if (!media) return <FontIcon icon={FONT_ICON.MILESTONE} className='text-36 text-secondary' />;

  const title = item.getTitle();

  // Type unused for now
  const { type, url } = media;

  return <Image src={url} alt={title} fill />;
};

function TimelineIcon({ item, className }: TimelineIconProps): ReactNode {
  const renderedIcon = renderIcon(item);

  return (
    <div className={className}>
      <div className='bg-secondary p-2 w-13 h-13 flex justify-center items-center overflow-hidden'>
        {renderedIcon}
      </div>
    </div>
  );
}

export type TimelineIconProps = {
  item: TimelineItem,
  className?: string,
};

export default TimelineIcon;
