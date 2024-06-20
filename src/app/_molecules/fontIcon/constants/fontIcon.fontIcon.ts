// Components
import { GoMilestone } from '@react-icons/all-files/go/GoMilestone';
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";
import { SiStorybook } from "@react-icons/all-files/si/SiStorybook";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { IoIosMail } from "@react-icons/all-files/io/IoIosMail";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

enum FONT_ICON {
  MILESTONE = 'MILESTONE',
  REACT = 'REACT',
  NEXT_JS = 'NEXT_JS',
  TAILWIND_CSS = 'TAILWIND_CSS',
  REDUX = 'REDUX',
  STORYBOOK = 'STORYBOOK',
  MONGO_DB = 'MONGO_DB',
  PANDAS = 'PANDAS',
  PYTHON = 'PYTHON',
  GITHUB = 'GITHUB',
  TWITTER = 'TWITTER',
  E_MAIL = 'E_MAIL',
  LINKEDIN = 'LINKEDIN',
  INSTAGRAM = 'INSTAGRAM',
};

const COMPONENT_BY_ICON = {
  [FONT_ICON.MILESTONE]: GoMilestone,
  [FONT_ICON.REACT]: FaReact,
  [FONT_ICON.NEXT_JS]: SiNextDotJs,
  [FONT_ICON.TAILWIND_CSS]: SiTailwindcss,
  [FONT_ICON.REDUX]: SiRedux,
  [FONT_ICON.STORYBOOK]: SiStorybook,
  [FONT_ICON.MONGO_DB]: SiMongodb,
  [FONT_ICON.PYTHON]: SiPython,
  [FONT_ICON.GITHUB]: SiGithub,
  [FONT_ICON.TWITTER]: FaTwitter,
  [FONT_ICON.E_MAIL]: IoIosMail,
  [FONT_ICON.LINKEDIN]: SiLinkedin,
  [FONT_ICON.INSTAGRAM]: FaInstagram,
};

export { FONT_ICON };
export default COMPONENT_BY_ICON;
