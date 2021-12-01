//Schemas
import featured from './featured';
import projects from './projects';

const config = {
    cms_manual_init: true,
    backend: {
        name: 'github',
        repo: 'mynameisankit/portfolio-v2',
        branch: 'main',
    },
    media_folder: 'public/images',
    public_folder: 'images',
    collections: [
        featured,
        projects
    ],
};

export default config;