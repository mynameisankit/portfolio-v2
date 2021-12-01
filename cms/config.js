//Schemas
import featured from './featured';
import projects from './projects';
import blogs from './blogs';

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
        projects,
        blogs
    ],
};

export default config;