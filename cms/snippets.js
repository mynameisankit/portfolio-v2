const snippets = {
    name: 'snippets',
    label: 'Snippets',
    folder: 'data/snippets',
    create: true,
    extension: 'md',
    slug: '{{fields.title}}',
    preview_path: 'http://localhost:3000/snippets',
    editor: {
        preview: false
    },
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: true
        }, {
            label: 'Abstract',
            name: 'abstract',
            widget: 'text',
            required: true
        },
        {
            label: 'Technology',
            name: 'technology',
            widget: 'string'
        },
        {
            label: 'Publish Date',
            name: 'date',
            widget: 'datetime'
        },
        {
            label: 'Body',
            name: 'body',
            widget: 'markdown',
        }
    ]
};

export default snippets;