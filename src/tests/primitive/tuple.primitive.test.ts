// import { describe, expect, it, test, vi } from 'vitest'
// import Forge from '~/domain/Forge'
// import { faker } from '@faker-js/faker'
//
// describe('Forge Tests', () => {
//     describe('Single', () => {
//         it('Number int', () => {
//             const spy = vi.spyOn(faker.number, 'int')
//             const output = Forge.forgeTupleOfPrimitives([
//                 {
//                     module: 'number',
//                     entity: 'int',
//                 },
//                 {
//                     module: 'number',
//                     entity: 'float',
//                 },
//             ])
//             expect(spy).toHaveBeenCalled()
//             expect(output).satisfy(Number.isInteger)
//         })
//         it('Number bigInt', () => {
//             const spy = vi.spyOn(faker.number, 'bigInt')
//             const output = Forge.forgeTupleOfPrimitives([
//                 {
//                     module: 'number',
//                     entity: 'int',
//                 },
//                 {
//                     module: 'number',
//                     entity: 'float',
//                 },
//             ])
//             expect(spy).toHaveBeenCalled()
//         })
//         it('Number binary', () => {
//             const spy = vi.spyOn(faker.number, 'binary')
//             const output = Forge.forgeTupleOfPrimitives([
//                 {
//                     module: 'number',
//                     entity: 'int',
//                 },
//                 {
//                     module: 'number',
//                     entity: 'float',
//                 },
//             ])
//             expect(spy).toHaveBeenCalled()
//         })
//         it('Number octal', () => {
//             const spy = vi.spyOn(faker.number, 'octal')
//             const output = Forge.forgeTupleOfPrimitives([
//                 {
//                     module: 'number',
//                     entity: 'int',
//                 },
//                 {
//                     module: 'number',
//                     entity: 'float',
//                 },
//             ])
//             expect(spy).toHaveBeenCalled()
//         })
//         it('Number hex', () => {
//             const spy = vi.spyOn(faker.number, 'hex')
//             const output = Forge.forgeTupleOfPrimitives([
//                 {
//                     module: 'number',
//                     entity: 'int',
//                 },
//                 {
//                     module: 'number',
//                     entity: 'float',
//                 },
//             ])
//             expect(spy).toHaveBeenCalled()
//         })
//         it('Number float', () => {
//             const spy = vi.spyOn(faker.number, 'float')
//             const output = Forge.forgeTupleOfPrimitives([
//                 {
//                     module: 'number',
//                     entity: 'int',
//                 },
//                 {
//                     module: 'number',
//                     entity: 'float',
//                 },
//             ])
//             expect(spy).toHaveBeenCalled()
//         })
//     })
// })
