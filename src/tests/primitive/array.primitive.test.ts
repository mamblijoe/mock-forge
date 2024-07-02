// import { describe, expect, test, vi } from 'vitest'
// import Forge from '~/domain/Forge'
// import { faker, NumberModule, StringModule } from '@faker-js/faker'
//
// const LENGTH = 5
//
// describe('Тесты: генерация единичных примитивов', () => {
//     describe('Генерация конечных сущностей', () => {
//         test.each(Forge.description.string)(
//             'Генерация примитивов сущности %s',
//             (entity) => {
//                 const spy = vi.spyOn(faker.string, entity as keyof StringModule)
//                 const output = Forge.forgeArrayOfPrimitives(
//                     {
//                         meta: { module: 'string', entity },
//                     },
//                     LENGTH
//                 )
//                 console.log('-----------------------------------------------')
//                 console.log(`Генерация примитивов сущности ${entity}\n`, output)
//                 console.log('-----------------------------------------------')
//
//                 expect(spy).toHaveBeenCalled()
//                 expect(output).toBeDefined()
//                 expect(output).toHaveLength(LENGTH)
//             }
//         )
//     })
//
//     describe('Генерация конечных сущностей', () => {
//         test.each(Forge.description.number)(
//             'Генерация примитивов сущности %s',
//             (entity) => {
//                 const spy = vi.spyOn(faker.number, entity as keyof NumberModule)
//                 const output = Forge.forgeArrayOfPrimitives(
//                     {
//                         meta: { module: 'number', entity },
//                     },
//                     LENGTH
//                 )
//                 console.log('-----------------------------------------------')
//                 console.log(`Генерация примитивов сущности ${entity}\n`, output)
//                 console.log('-----------------------------------------------')
//                 expect(spy).toHaveBeenCalled()
//                 expect(output).toBeDefined()
//                 expect(output).toHaveLength(LENGTH)
//             }
//         )
//     })
// })
