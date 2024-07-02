// import { describe, expect, it, test, vi } from 'vitest'
// import Forge from '~/domain/Forge'
// import { faker, NumberModule, StringModule } from '@faker-js/faker'
//
// describe('Тесты: генерация единичных примитивов', () => {
//     describe('Генерация конечных сущностей', () => {
//         test.each(Forge.description.string)(
//             'Генерация примитивов сущности %s',
//             (entity) => {
//                 const spy = vi.spyOn(faker.string, entity as keyof StringModule)
//                 const output = Forge.forgeSinglePrimitive({
//                     meta: {
//                         module: 'string',
//                         entity,
//                     },
//                 })
//                 console.log('-----------------------------------------------')
//                 console.log(`Генерация примитивов сущности ${entity}\n`, output)
//                 console.log('-----------------------------------------------')
//
//                 expect(spy).toHaveBeenCalled()
//                 expect(output).toBeDefined()
//                 expect(output).toBeTypeOf('string')
//             }
//         )
//     })
//
//     describe('Генерация конечных сущностей', () => {
//         test.each(Forge.description.number)(
//             'Генерация примитивов сущности %s',
//             (entity) => {
//                 const spy = vi.spyOn(faker.number, entity as keyof NumberModule)
//                 const output = Forge.forgeSinglePrimitive({
//                     meta: { module: 'number', entity },
//                 })
//                 console.log('-----------------------------------------------')
//                 console.log(`Генерация примитивов сущности ${entity}\n`, output)
//                 console.log('-----------------------------------------------')
//                 expect(spy).toHaveBeenCalled()
//                 expect(output).toBeDefined()
//             }
//         )
//     })
// })
