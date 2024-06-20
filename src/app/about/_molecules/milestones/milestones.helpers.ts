// Lodash
import _map from 'lodash/map';

// Types
import type { MilestoneItem } from './types';
import { TimelineItem, MEDIA_TYPE as TIMELINE_MEDIA_TYPE } from './molecules/timeline';

const makeTimelineItem = ({ title, subtitle, description, image, skills, duration }: MilestoneItem): TimelineItem =>
  new TimelineItem()
    .setTitle(title)
    .setSubTitle(subtitle)
    .setDescription(description)
    .setTime(duration)
    .setMedia(TIMELINE_MEDIA_TYPE.IMAGE, image)
    .setSkills(skills);

export const makeTimelineItems = (milestones: Array<MilestoneItem>): Array<TimelineItem> => _map(milestones, makeTimelineItem);
