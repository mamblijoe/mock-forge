// import { COUNT_TYPE } from '~/types/forge'
// import Forge from '~/domain/Forge/index'
//
// const OBJECT_WITH_NESTING_PRIMITIVE_TUPLE = {
//     propertyName: 'primitiveTuple',
//     array: {
//         countType: COUNT_TYPE.TUPLE,
//         items: [
//             {
//                 module: 'string',
//                 entity: 'alpha',
//             },
//             {
//                 module: 'number',
//                 entity: 'int',
//             },
//             {
//                 module: 'string',
//                 entity: 'hexadecimal',
//             },
//         ],
//     },
// }
//
// const OBJECT_WITH_NESTING_PRIMITIVE_ARRAY = {
//     propertyName: 'primitiveArray',
//     array: {
//         countType: COUNT_TYPE.ARRAY,
//         count: 10,
//         items: [
//             {
//                 module: 'string',
//                 entity: 'hexadecimal',
//             },
//         ],
//     },
// }
//
// const OBJECT_WITH_NESTING_OBJECT_TUPLE = {
//     propertyName: 'objectTuple',
//     array: {
//         countType: COUNT_TYPE.TUPLE,
//         items: [
//             [
//                 {
//                     propertyName: 'externalRoleId',
//                     module: 'string',
//                     entity: 'uuid',
//                 },
//                 {
//                     propertyName: 'externalRoleName',
//                     module: 'string',
//                     entity: 'alpha',
//                 },
//             ],
//             [
//                 {
//                     propertyName: 'internalRoleId',
//                     module: 'string',
//                     entity: 'uuid',
//                 },
//                 {
//                     propertyName: 'internalRoleName',
//                     module: 'string',
//                     entity: 'alpha',
//                 },
//             ],
//         ],
//     },
// }
//
// const OBJECT_WITH_NESTING_OBJECT_ARRAY = {
//     propertyName: 'objectArray',
//     array: {
//         countType: COUNT_TYPE.ARRAY,
//         count: 5,
//         items: [
//             {
//                 propertyName: 'roleId',
//                 module: 'string',
//                 entity: 'uuid',
//             },
//             {
//                 propertyName: 'roleName',
//                 module: 'string',
//                 entity: 'alpha',
//             },
//         ],
//     },
// }
//
// const OBJECT_WITH_NESTING_EXAMPLE = {
//     propertyName: 'nestedObject',
//     subFields: [
//         {
//             propertyName: 'id',
//             module: 'number',
//             entity: 'int',
//         },
//         {
//             propertyName: 'username',
//             module: 'string',
//             entity: 'alpha',
//         },
//         {
//             propertyName: 'email',
//             module: 'string',
//             entity: 'alpha',
//         },
//         {
//             propertyName: 'address',
//             subFields: [
//                 {
//                     propertyName: 'street',
//                     module: 'string',
//                     entity: 'alpha',
//                 },
//                 {
//                     propertyName: 'suite',
//                     module: 'string',
//                     entity: 'alpha',
//                 },
//                 {
//                     propertyName: 'city',
//                     module: 'string',
//                     entity: 'alpha',
//                 },
//                 {
//                     propertyName: 'zipcode',
//                     module: 'string',
//                     entity: 'alpha',
//                 },
//                 {
//                     propertyName: 'geo',
//                     subFields: [
//                         {
//                             propertyName: 'lat',
//                             module: 'string',
//                             entity: 'alpha',
//                         },
//                         {
//                             propertyName: 'lng',
//                             module: 'string',
//                             entity: 'alpha',
//                         },
//                     ],
//                 },
//             ],
//         },
//         {
//             propertyName: 'phone',
//             module: 'string',
//             entity: 'alpha',
//         },
//         {
//             propertyName: 'website',
//             module: 'string',
//             entity: 'alpha',
//         },
//         {
//             propertyName: 'company',
//             subFields: [
//                 {
//                     propertyName: 'name',
//                     module: 'string',
//                     entity: 'alpha',
//                 },
//                 {
//                     propertyName: 'catchPhrase',
//                     module: 'string',
//                     entity: 'alpha',
//                 },
//                 {
//                     propertyName: 'bs',
//                     module: 'string',
//                     entity: 'alpha',
//                 },
//             ],
//         },
//     ],
// }
//
// const PRIMITIVE_SINGLE = Forge.forgeSinglePrimitive({
//     module: 'string',
//     entity: 'alpha',
// })
//
// const count = 5
//
// const PRIMITIVE_ARRAY = Forge.forgeArrayOfPrimitives(
//     {
//         module: 'number',
//         entity: 'float',
//     },
//     count
// )
//
// const PRIMITIVE_TUPLE = Forge.forgeTupleOfPrimitives([
//     {
//         module: 'number',
//         entity: 'float',
//     },
//     {
//         module: 'number',
//         entity: 'int',
//     },
//     {
//         module: 'string',
//         entity: 'alpha',
//     },
// ])
//
// export const OBJECT_SINGLE = Forge.forgeSingleObject([
//     OBJECT_WITH_NESTING_EXAMPLE,
//     OBJECT_WITH_NESTING_OBJECT_TUPLE,
//     OBJECT_WITH_NESTING_OBJECT_ARRAY,
//     OBJECT_WITH_NESTING_PRIMITIVE_TUPLE,
//     OBJECT_WITH_NESTING_PRIMITIVE_ARRAY,
// ])
//
// const OBJECT_ARRAY = Forge.forgeArrayOfObjects([OBJECT_WITH_NESTING_EXAMPLE], 2)
//
// const OBJECT_TUPLE = Forge.forgeTupleOfObjects([
//     [
//         {
//             propertyName: 'user 1',
//             subFields: [
//                 {
//                     propertyName: 'id',
//                     module: 'string',
//                     entity: 'uuid',
//                 },
//                 {
//                     propertyName: 'role',
//                     subFields: [
//                         {
//                             propertyName: 'id',
//                             module: 'string',
//                             entity: 'uuid',
//                         },
//                         {
//                             propertyName: 'roleName',
//                             module: 'string',
//                             entity: 'alpha',
//                         },
//                     ],
//                 },
//             ],
//         },
//     ],
//     [
//         {
//             propertyName: 'user 2',
//             subFields: [
//                 {
//                     propertyName: 'permissionId',
//                     module: 'string',
//                     entity: 'uuid',
//                 },
//                 {
//                     propertyName: 'permission',
//                     module: 'string',
//                     entity: 'alpha',
//                 },
//             ],
//         },
//     ],
// ])
//
// export const EXAMPLES = [
//     PRIMITIVE_SINGLE,
//     PRIMITIVE_ARRAY,
//     PRIMITIVE_TUPLE,
//     OBJECT_SINGLE,
//     OBJECT_ARRAY,
//     OBJECT_TUPLE,
// ]
//
// export const EXAMPLE_PRESETS = Forge.forgeArrayOfObjects(
//     OBJECT_WITH_NESTING_EXAMPLE.subFields,
//     count
// )
