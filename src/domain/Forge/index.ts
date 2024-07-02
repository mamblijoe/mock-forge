import { COLLECTION_TYPE, ForgeSchema, isPrimitive } from '~/types/forge'
import StringForge from '~/domain/modules/string'
import NumberForge from '~/domain/modules/number'
import { de } from '@faker-js/faker'

const isComplex = (
    configuration: ForgeSchema | ForgeSchema[]
): configuration is ForgeSchema[] => {
    return Array.isArray(configuration)
}

class Forge {
    private commands = {
        string: StringForge,
        number: NumberForge,
    }

    public get description() {
        return Object.fromEntries(
            Object.entries(this.commands).map(([module, entity]) => {
                return [module, entity.describe()]
            })
        )
    }

    public forge(configuration: ForgeSchema | ForgeSchema[]): unknown {
        if (Array.isArray(configuration)) {
            return this.forgeComplex(configuration)
        }

        return this.forgePrimitive(configuration)
    }

    private forgePrimitive(configuration: ForgeSchema) {
        if (!!configuration.meta?.count) {
            return this.forgeArrayOfPrimitives(configuration)
        }

        return this.forgeSinglePrimitive(configuration)
    }

    private forgeSinglePrimitive(configuration: ForgeSchema) {
        return this.forgeByPrint(configuration)
    }

    private forgeComplex(configuration: ForgeSchema[]) {
        return configuration.reduce(
            (acc, config) => {
                const name = config?.key || ''
                return {
                    ...acc,
                    [name]: this.forge([config]),
                }
            },
            {} as Record<string, unknown>
        )
    }
    //
    // public forgeArrayOfObjects(configuration: ForgeSchema[], count: number) {
    //     const example = configuration?.[0] as ForgeSchema
    //     const isObject = !!example?.meta?.name
    //
    //     if (isObject) {
    //         const emptyArrayFromCount = Array(count).fill({})
    //         return emptyArrayFromCount.map(() =>
    //             configuration.reduce((acc, config) => {
    //                 const name = config?.meta?.name || ''
    //                 return {
    //                     ...acc,
    //                     [name]: this.forgeEntity(config),
    //                 }
    //             }, {})
    //         )
    //     }
    //
    //     return this.forgeArrayOfPrimitives(example, count)
    // }
    //
    // public forgeTupleOfObjects(configuration: ForgeSchema[][]) {
    //     const example = (configuration as ForgeSchema[][])?.[0]?.[0]
    //     const isObject = !!example?.meta?.name
    //
    //     if (isObject) {
    //         return configuration.map((item) => {
    //             return item.reduce((acc, config) => {
    //                 const name = config?.meta?.name || ''
    //                 return {
    //                     ...acc,
    //                     [name]: this.forgeEntity(config),
    //                 }
    //             }, {})
    //         })
    //     }
    //
    //     return this.forgeTupleOfPrimitives(configuration as ForgeSchema[])
    // }
    //
    private forgeArrayOfPrimitives(configuration: ForgeSchema) {
        if (!configuration?.meta?.count) {
            throw new Error('Count is not provided')
        }

        return Array(configuration.meta.count)
            .fill({})
            .map(() => this.forgeByPrint(configuration))
    }

    // public forgeTupleOfPrimitives(configuration: ForgeSchema) {
    //     console.log('INVOKE: forgeTupleOfPrimitives')
    //     return configuration.map((config) => this.forgeEntity(config))
    // }
    //
    // private forgeEntity(config: ForgeSchema): unknown {
    //     console.log('INVOKE: forgeEntity')
    //
    //     const hasCount = !!config?.meta?.value?.count
    //     const hasCollectionType =
    //         config?.meta?.value?.type &&
    //         [COUNT_TYPE.ARRAY, COUNT_TYPE.TUPLE].includes(
    //             config?.meta?.value?.type!
    //         )
    //     const isCollection = hasCount || hasCollectionType
    //     console.log('isCollection', {
    //         name: config.meta?.name,
    //         isCollection,
    //         hasCount,
    //         hasCollectionType,
    //         config: JSON.stringify(config),
    //     })
    //     if (isCollection) {
    //         const count = config?.meta?.value?.count || 1
    //         const items = config?.meta?.value?.items || []
    //         const isTuple = items?.[0] && Array.isArray(items?.[0])
    //         console.log('--->', isTuple)
    //         if (isTuple) {
    //             return this.forgeTupleOfObjects(items as ForgeSchema[][])
    //         }
    //         return this.forgeArrayOfObjects(items as ForgeSchema[], count)
    //     }
    //
    //     const hasItems = !!config?.meta?.value?.items
    //     if (hasItems) {
    //         const fields = config.meta!.value?.items!
    //         return this.subFields(fields)
    //     }
    //
    //     return this.forgeByPrint(config)
    // }
    //
    private forgeByPrint(config: ForgeSchema) {
        if (isPrimitive(config?.key, config.value)) {
            const module = config.value.module
            const entity = config.value.entity
            // @ts-ignore
            return this.commands?.[module]?.[entity]?.(config?.options)
        }

        return this.forge(config.value)
    }
    //
    // private subFields(subFields: ForgeSchema[]) {
    //     console.log('INVOKE: subFields', subFields)
    //     const result = {
    //         ...subFields.reduce((acc, subField) => {
    //             const key = subField?.meta?.name || ''
    //             return {
    //                 ...acc,
    //                 [key]: this.forgeSinglePrimitive(subField), // выбирать метод для генерации
    //             }
    //         }, {}),
    //     }
    //     console.log('result', result)
    //     return result
    // }
}

const forge = new Forge()

export default forge
