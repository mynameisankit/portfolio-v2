import Image from 'next/image';
import TestImage from './test.webp';

function ProjectImage({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className='absolute z-1 h-full w-full bg-secondary opacity-75 lg:opacity-10 lg:hover:opacity-0' />
      <Image src={TestImage} alt='Project Image' fill className='relative z-0' />
    </div>
  );
}

export default ProjectImage;
