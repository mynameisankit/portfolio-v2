import Link from "next/link";
import clsx from "clsx";

// Helpers
import { getNavLinkClassName } from './navLink.helpers';

type NavLinkProps = {
  name: string,
  slug: string,
  highlight?: boolean,
  activePath?: string,
};

const NavLink = ({ name, slug, highlight = false }: NavLinkProps) => {
  const navLinkClassName = getNavLinkClassName(highlight);

  return (
    <Link href={slug} className={clsx("italic", navLinkClassName)}>
      {name}
    </Link>
  );
};

export default NavLink;
