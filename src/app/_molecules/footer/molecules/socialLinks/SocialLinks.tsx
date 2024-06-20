// Lodash
import _map from 'lodash/map';

// Constants
import SOCIAL_LINKS from "./constants/socialLinks.socialLinks";

// Components
import FontIcon from '@molecules/fontIcon';

const renderSocialLink = ({ name, icon, url }) => (
  <a target='_blank' href={url} key={name}>
    <FontIcon icon={icon} />
  </a>
);

const SocialLinks = () => (
  <div className="flex gap-8 items-center">
    {_map(SOCIAL_LINKS, renderSocialLink)}
  </div>
);

export default SocialLinks;
