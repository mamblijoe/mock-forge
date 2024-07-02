import Forge from '~/domain/Forge'

console.log(
    '=',
    JSON.stringify(
        Forge.forge(
            [
                {
                    meta: { count: 0 },
                    key: 'single_primitive_key',
                    value: {
                        module: 'number',
                        entity: 'float',
                    },
                },
                {
                    meta: { count: 0 },
                    key: 'nested_key',
                    value: [
                        {
                            meta: { count: 0 },
                            key: 'nested_single_primitive_key',
                            value: {
                                module: 'number',
                                entity: 'float',
                            },
                        },
                        {
                            meta: { count: 5 },
                            key: 'nested_array_primitive_key',
                            value: {
                                module: 'number',
                                entity: 'float',
                            },
                        },
                    ],
                },
                {
                    meta: { count: 5 },
                    key: 'array_primitive_key',
                    value: {
                        module: 'number',
                        entity: 'float',
                    },
                },
                {
                    meta: { count: 5 },
                    key: 'array_complex_key',
                    value: [
                        {
                            meta: { count: 5 },
                            key: 'nested_single_complex_key',
                            value: {
                                module: 'number',
                                entity: 'float',
                            },
                        },
                    ],
                },
            ],
            5
        ),
        null,
        2
    ),
    '\n'
)
