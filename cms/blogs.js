const blogs = {
    name: 'blogs',
    label: 'Blog',
    folder: 'content/blogs',
    create: true,
    extension: 'md',
    slug: '{{fields.title}}',
    preview_path: 'http://localhost:3000/blogs/{{fields.title}}',
    fields: [
        { 
            label: 'Thumbnail', 
            name: 'thumbail', 
            widget: 'image',
            required: false
        },
        { 
            label: 'Title', 
            name: 'title', 
            widget: 'string'
        },
        { 
            label: 'Sub-Title', 
            name: 'subTitle', 
            widget: 'string',
            required: false
        },
        { 
            label: 'Abstract', 
            name: 'abstract', 
            widget: 'text',
            required: false
        },
        {
            label: 'Tags',
            name: 'tags',
            widget: 'list',
            default: ['HTML', 'CSS', 'JavaScript']
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
        },
    ],
};

export default blogs;