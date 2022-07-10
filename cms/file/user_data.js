import Education from '@/cms/file/schemas/education';
import Journey from '@/cms/file/schemas/journey';
import Tools from '@/cms/file/schemas/tools';

const UserData = {
    label: 'User Data',
    name: 'userData',
    file: 'data/user_data.json',
    editor: {
        preview: false
    },
    fields: [
        {
            label: 'Technologies',
            name: 'technologies',
            widget: 'list',
            required: true
        },
        {
            label: 'Social Media Links',
            name: 'socialMediaLinks',
            widget: 'object',
            collapsed: true,
            fields: [
                { label: 'GitHub', name: 'github' },
                { label: 'LinkedIn', name: 'linkedin' },
                { label: 'Twitter', name: 'twitter' },
                { label: 'Instagram', name: 'instagram' },
                { label: 'Facebook', name: 'facebook' },
                { label: 'E-Mail', name: 'email' }
            ]
        },
        Education,
        Journey,
        Tools
    ]
};

export default UserData;