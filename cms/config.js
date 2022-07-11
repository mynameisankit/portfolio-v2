//Schemas
//Folder Based Schemas
import Featured from '@/cms/featured';
import Projects from '@/cms/projects';
import Blogs from '@/cms/blogs';
import Snippets from '@/cms/snippets';
//File Based Schemas
import UserData from '@/cms/file/user_data';
import Colophon from '@/cms/file/colophon';

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
            label: 'User Data',
            name: 'user',
            files: [
                UserData
            ]
        },
        {
            label: 'Colophon',
            name: 'colophon',
            files: [
                Colophon
            ]
        }
    ]
};

export default config;