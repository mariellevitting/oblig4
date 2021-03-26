const movie = {
    title: 'movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
            title: 'tittel',
            name: 'title',
            type: 'string',
            description: 'Navn på filmen'
        },
        {
            title: 'actor',
            name: 'actor',
            type: 'reference',
            to: [{type: 'actor'}]
        }
    ]
}

export default movie;
