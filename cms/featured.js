const featured = {
    name: 'featured',
    label: 'Featured Projects',
    folder: 'data/featured',
    create: true,
    extension: 'json',
    slug: '{{fields.title}}_{{year}}-{{month}}-{{day}}',
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
        }, {
            label: 'Thumbnail',
            name: 'thumbnail',
            widget: 'image',
            required: true
        },
        {
            label: "GitHub Link",
            name: "github",
            widget: "string",
            required: false,
        },
        {
            label: "External Link",
            name: "extLink",
            widget: "string",
            required: false,
        },
        {
            label: 'Technology Stack',
            name: 'techStack',
            widget: 'list',
            default: ["HTML", "CSS", "JavaScript"]
        }
    ]
};

export default featured;