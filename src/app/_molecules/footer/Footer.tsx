import Link from "next/link";

// Components
import SocialLinks from "./molecules/socialLinks";

function Footer() {
  return (
    <div className="flex flex-col items-center py-4 gap-2">
      <SocialLinks />

      <Link href='/colophon'>
        Colophon
      </Link>
    </div>
  );
}

export default Footer;
