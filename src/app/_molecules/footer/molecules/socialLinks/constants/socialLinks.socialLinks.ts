// Constants
import { FONT_ICON } from "@molecules/fontIcon";

interface SociaLink {
  name: string,
  url: string,
  icon: Array<keyof FONT_ICON>,
}

const SOCIAL_LINKS: SociaLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/mynameisankit',
    icon: FONT_ICON.GITHUB,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/bizzare_kumar',
    icon: FONT_ICON.TWITTER,
  },
  {
    name: 'E-Mail',
    url: 'mailto:kumar.ankit.862001@gmail.com',
    icon: FONT_ICON.E_MAIL,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mynameisankit',
    icon: FONT_ICON.LINKEDIN,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/bizzare.kumar',
    icon: FONT_ICON.INSTAGRAM,
  },
];

export default SOCIAL_LINKS;
