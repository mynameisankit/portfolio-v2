//Schemas
//Folder Based Schemas
import featured from './featured';
import projects from './projects';
import blogs from './blogs';
//File Based Schemas
import social from './social';

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
        blogs,
        {
            label: 'Common Data',
            name: 'common',
            files: [
                social
            ],
        }
    ],
};

export default config;