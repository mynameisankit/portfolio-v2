'use client'

import { usePathname } from 'next/navigation';

// Lodash
import _map from 'lodash/map';

// Components
import NavLink from './atoms/navLink';

// Constants
import PAGES from './constants/pages.navBar';

function Navbar() {
    const pathname = usePathname();

    return (
        <div className='flex justify-between px-4 py-2'>
            <NavLink name='Home' slug='/' />
            
            <div className='flex gap-6'>
                {_map(PAGES, ({ name, ...rest }) => <NavLink key={name} name={name} activePath={pathname} {...rest} />)}
            </div>
        </div>
    );
}

export default Navbar;
