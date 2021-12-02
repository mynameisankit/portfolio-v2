const projects = {
    name: 'projects',
    label: 'Projects',
    folder: 'content/projects',
    create: true,
    extension: 'json',
    slug: '{{fields.title}}-{{year}}-{{month}}-{{day}}',
    preview_path: 'http://localhost:3000/projects',
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
            label: 'Duration',
            name: 'duration',
            widget: 'string',
            required: false
        }, {
            label: "GitHub Link",
            name: "github",
            widget: "string",
            required: false,
        },
        {
            label: "GitHub API Link",
            name: "githubAPI",
            widget: "string",
            required: false,
        }, {
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
        },
    ],
};

export default projects;