const education = {
    name: 'education',
    label: 'Education',
    widget: 'list',
    collapsed: true,
    fields: [
        {
            label: 'Name',
            name: 'name',
            widget: 'string',
            required: true
        }, {
            label: 'Branch',
            name: 'branch',
            widget: 'string',
            required: true
        }, {
            label: 'Degree',
            name: 'degree',
            widget: 'string',
            required: true
        },
        {
            label: 'Logo',
            name: 'image',
            widget: 'image',
            required: true
        },
        {
            label: 'Duration',
            name: 'duration',
            widget: 'string',
            required: true
        },
        {
            label: 'URL',
            name: 'url',
            widget: 'string',
            required: true
        }
    ]
};

export default education;