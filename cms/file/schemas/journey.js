/*
year
title
description
icon
*/

const journey = {
    name: 'journey',
    label: 'Journey',
    widget: 'list',
    collapsed: true,
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: true
        }, {
            label: 'Year',
            name: 'year',
            widget: 'string',
            required: true
        }, {
            label: 'Description',
            name: 'description',
            widget: 'text',
            required: true
        },
        {
            label: 'Icon',
            name: 'icon',
            widget: 'string',
            required: true
        }
    ]
};

export default journey;