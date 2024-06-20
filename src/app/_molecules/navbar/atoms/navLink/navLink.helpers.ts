export function getNavLinkClassName(highlight = false) {
  if(!highlight) return;

  const navLinkClassName = 'border border-solid border-primary rounded-1 px-2 hover:bg-secondary hover:text-secondary hover:font-bold transition-colors ease-out';
  return navLinkClassName;
}
