const Colophon = {
    label: 'Colophon',
    name: 'colophon',
    file: 'data/colophon.md',
    editor: {
        preview: false
    },
    fields: [
        {
            label: 'Body',
            name: 'body',
            widget: 'markdown',
            required: true
        },
    ]
};

export default Colophon;