const tools = {
    name: 'tools',
    label: 'Tools',
    widget: 'list',
    collapsed: true,
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: true
        }, {
            label: 'Description',
            name: 'description',
            widget: 'string',
            required: true
        }, {
            label: 'URL',
            name: 'url',
            widget: 'string',
            required: true
        },
        {
            label: 'Use',
            name: 'use',
            widget: 'string',
            required: true
        }
    ]
};

export default tools;