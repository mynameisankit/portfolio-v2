//Schemas
//Folder Based Schemas
import Featured from '@/cms/featured';
import Projects from '@/cms/projects';
import Blogs from '@/cms/blogs';
import Snippets from '@/cms/snippets';
//File Based Schemas
import Links from '@/cms/links';

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
        Snippets,
        {
            label: 'Common Data',
            name: 'common',
            files: [
                Links
            ]
        }
    ]
};

export default config;