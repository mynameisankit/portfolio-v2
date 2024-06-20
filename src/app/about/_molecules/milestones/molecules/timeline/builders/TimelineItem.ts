import { ReactElement, ReactNode } from 'react';

// Constants
import MEDIA_TYPE from '../constants/timeline.mediaType';
import { FONT_ICON } from '@molecules/fontIcon';

class TimelineItem {
  title: string = '';
  subtitle?: string;
  description?: string;
  time: string = '';
  icon?: ReactElement;
  content?: ReactNode;
  skills: Array<keyof FONT_ICON>;

  constructor() {
    this.skills = [];
  }

  setTitle(title: string) {
    this.title = title;
    return this;
  }

  getTitle() {
    const { title } = this;
    return title;
  }

  setSubTitle(subtitle: string | undefined) {
    this.subtitle = subtitle;
    return this;
  }

  getSubTitle() {
    const { subtitle } = this;
    return subtitle;
  }

  setDescription(description: string | undefined) {
    this.description = description;
    return this;
  }

  getDescription() {
    const { description } = this;
    return description;
  }

  setContent(content: ReactNode) {
    this.content = content;
    return this;
  }

  getContent() {
    const { content } = this;
    return content;
  }

  setTime(time: string) {
    this.time = time;
    return this;
  }

  getTime() {
    const { time } = this;
    return time;
  }

  setIcon(icon: ReactElement) {
    this.icon = icon;
    return this;
  }

  getIcon() {
    const { icon } = this;
    return icon;
  }

  setMedia(type: MEDIA_TYPE, url: string) {
    if(!url) return this;

    this.media = { type, url };
    return this;
  }

  getMedia() {
    const { media } = this;
    return media;
  }

  setSkills(skills: Array<keyof ICON>) {
    this.skills = skills;
    return this;
  }

  getSkills() {
    const { skills } = this;
    return skills;
  }
};

export default TimelineItem;
