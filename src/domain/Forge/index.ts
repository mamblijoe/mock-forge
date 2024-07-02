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

    public forge(
        configuration: ForgeSchema | ForgeSchema[],
        count: number = 0
    ): unknown {
        if (Array.isArray(configuration)) {
            return this.forgeComplex(configuration, count)
        }

        return this.forgePrimitive(configuration)
    }

    private forgePrimitive(configuration: ForgeSchema) {
        if (!!configuration.meta?.count) {
            return this.forgeArrayOfPrimitives(configuration)
        }

        return this.forgeByPrint(configuration)
    }

    private forgeComplex(configuration: ForgeSchema[], count: number = 0) {
        if (count) {
            return Array(count)
                .fill({})
                .map(() => this.forgeSingleObject(configuration))
        }

        return this.forgeSingleObject(configuration)
    }

    private forgeSingleObject(configuration: ForgeSchema[]) {
        return configuration.reduce(
            (acc, config) => {
                const name = config?.key || ''
                return {
                    ...acc,
                    [name]: this.forge(config),
                }
            },
            {} as Record<string, unknown>
        )
    }

    private forgeArrayOfPrimitives(configuration: ForgeSchema) {
        if (!configuration?.meta?.count) {
            throw new Error('Count is not provided')
        }

        return Array(configuration.meta.count)
            .fill({})
            .map(() => this.forgeByPrint(configuration))
    }

    private forgeByPrint(config: ForgeSchema) {
        if (isPrimitive(config?.key, config.value)) {
            const module = config.value.module
            const entity = config.value.entity
            // @ts-ignore
            return this.commands?.[module]?.[entity]?.(config?.options)
        }

        return this.forge(config.value)
    }
}

const forge = new Forge()

export default forge
