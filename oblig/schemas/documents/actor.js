const actor = {
    title: 'actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
            title: 'actor',
            name: 'title',
            type: 'string',
            description: 'Navn på skuespiller',
            validation: (Rule) => Rule.required()
        }
    ]
}

export default actor;
