import clsx from 'clsx';

// Lodash
import _map from 'lodash/map';

// Components
import FontIcon, { FONT_ICON } from '@molecules/fontIcon';
import ProjectImage from './molecules/projectImage';

// Constants
import ALIGNMENT from '@constants/alignment';

function Project({ alignment = ALIGNMENT.LEFT }) {
  return (
    <div className='grid grid-cols-12 grid-rows-1 mx-auto w-11/12 lg:w-2/3 min-h-75 text-secondary lg:text-primary'>
      <div className={clsx('relative z-1 row-start-1 p-6 lg:p-0 row-end-1 col-start-1 lg:row-start-1 lg:row-end-1  col-end-13 flex flex-col justify-center gap-4', {
        'lg:col-start-1 lg:col-end-8': alignment === ALIGNMENT.LEFT,
        'lg:col-start-6 lg:col-end-13': alignment === ALIGNMENT.RIGHT,
      })}>
        <div className={clsx('text-center', {
          'lg:text-left': alignment === ALIGNMENT.LEFT,
          'lg:text-right': alignment === ALIGNMENT.RIGHT,
        })}>
          <h3>Personal Project</h3>
          <h2>React JSON Renderer</h2>
        </div>

        <div className="relative lg:bg-secondary lg:text-secondary px-6 py-3 before:content-[''] before:absolute before:h-full before:w-full before:border-primary before:top-3 before:left-3 before:border-solid before:border-4">
          <p className='relative z-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis lacus ut diam fermentum interdum. Nullam suscipit urna in ipsum maximus tristique. Aliquam at sem elementum, volutpat leo a, vulputate eros. Sed consequat elementum nisl sit amet laoreet. Nunc ac ultricies risus. Nunc et congue massa. Donec sed enim nec nisi dapibus dignissim. Nam lorem ligula, aliquam quis est condimentum, pharetra posuere risus.
          </p>
        </div>

        <div className={clsx('flex gap-2 justify-center lg:justify-normal', {
          'flex-row': alignment === ALIGNMENT.LEFT,
          'flex-row-reverse': alignment === ALIGNMENT.RIGHT,
        })}>
          {_map([FONT_ICON.NEXT_JS, FONT_ICON.REACT], icon => <FontIcon key={icon} icon={icon} className='text-36' />)}
        </div>
      </div>

      <ProjectImage className={clsx('relative z-0 row-start-1 row-end-1 col-start-1 col-end-13 lg:row-start-1 lg:row-end-1', {
        'lg:col-start-7 lg:col-end-13': alignment === ALIGNMENT.LEFT,
        'lg:col-start-1 lg:col-end-7': alignment === ALIGNMENT.RIGHT,
      })} />
    </div>
  );
}

export default Project;
