export const questions = [{
    section: 1,
    items:
        [
            {
                label: 'name',
                type: 'text',
                value: 'name'
            }, {
                label: 'surname',
                type: 'text',
                value: 'surname'
            }, {
                label: 'Street address',
                type: 'text',
                value: 'street'
            }
        ]
}, {
    section: 2,
    items: [
        {

            label: 'Eye sight',
            type: 'select',
            options: ['20/20']
        }, {
            label: 'Car-Brand',
            type: 'select',
            options: ['Audi', 'Peugeot', 'BMW', 'Porsche', 'Mercedes'],
            value: 'carBrand'
        }, {
            label: 'Tachometer distance',
            type: 'text',
            value: 'tachoDistance'

        }

    ]
}, {
    section: 3,
    title: "Billing Options",
    items: [
        {
            label: "Choose your billing option",
            type: "billingOption",
        }
    ]
}]

