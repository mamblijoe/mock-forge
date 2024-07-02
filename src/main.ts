import Forge from '~/domain/Forge'
import { COLLECTION_TYPE } from '~/types/forge'
import { fa } from '@faker-js/faker'

// console.log(
//     'SINGLE PRIMITIVE',
//     Forge.forge({
//         meta: {
//             isArray: false,
//         },
//         value: {
//             entity: 'nanoid',
//             module: 'string',
//         },
//     }),
//     '\n'
// )
//
// console.log(
//     'ARRAY PRIMITIVE',
//     Forge.forge({
//         meta: {
//             isArray: true,
//             count: 5,
//         },
//         value: {
//             entity: 'nanoid',
//             module: 'string',
//         },
//     }),
//     '\n'
// )
//
// console.log(
//     'TUPLE PRIMITIVE',
//     Forge.forge([
//         {
//             meta: {
//                 isArray: false,
//             },
//             value: {
//                 entity: 'nanoid',
//                 module: 'string',
//             },
//         },
//         {
//             meta: {
//                 isArray: false,
//             },
//             value: {
//                 entity: 'alpha',
//                 module: 'string',
//             },
//         },
//     ]),
//     '\n'
// )

console.log(
    '=',
    Forge.forge({
        meta: { count: 0 },
        value: {
            module: 'number',
            entity: 'float',
        },
    }),
    '\n'
)
//
// console.log(
//     'ARRAY COMPLEX',
//     Forge.forge({
//         meta: {
//             isArray: true,
//         },
//         value: [
//             {
//                 meta: {
//                     isArray: false,
//                 },
//                 value: {
//                     entity: 'nanoid',
//                     module: 'string',
//                 },
//             },
//         ],
//     }),
//     '\n'
// )
//
// console.log(
//     'TUPLE COMPLEX',
//     Forge.forge([
//         {
//             meta: {
//                 isArray: false,
//             },
//             value: [
//                 {
//                     meta: {
//                         isArray: false,
//                     },
//                     value: {
//                         entity: 'nanoid',
//                         module: 'string',
//                     },
//                 },
//             ],
//         },
//         {
//             meta: {
//                 isArray: false,
//             },
//             value: [
//                 {
//                     meta: {
//                         isArray: false,
//                     },
//                     value: {
//                         entity: 'nanoid',
//                         module: 'string',
//                     },
//                 },
//             ],
//         },
//     ]),
//     '\n'
// )
