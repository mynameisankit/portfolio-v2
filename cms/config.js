//Schemas
//Folder Based Schemas
import Featured from './featured';
import Projects from './projects';
import Blogs from './blogs';
//File Based Schemas
import Links from './Links';

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
        Featured,
        Projects,
        Blogs,
        {
            label: 'Common Data',
            name: 'common',
            files: [
                Links
            ],
        }
    ],
};

export default config;