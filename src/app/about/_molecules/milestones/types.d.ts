import ICON from '@constants/icon';

export type MilestoneItem = {
  title: string,
  subtitle?: string,
  description?: string,
  duration: string,
  image: string,
  skills: Array<keyof ICON>,
};
