export enum COLLECTION_TYPE {
    SINGLE = 'single',
    ARRAY = 'array',
    TUPLE = 'tuple',
}

export enum DATA_TYPE {
    PRIMITIVE = 'primitive',
    OBJECT = 'object',
}
export type ArraySchema = {
    countType: COLLECTION_TYPE
    count?: number
    items: ForgeSchema[] | ForgeSchema[][]
}

export type ForgeSchema_old = {
    key?: string
    module?: string
    entity?: string
    propertyName?: string
    options?: Record<string, unknown>
    subFields?: ForgeSchema[]
    array?: ArraySchema
}

export type PrimitiveFieldValue = {
    module: string
    entity: string
}
export type ComplexFieldValue = ForgeSchema[]

export type ForgeSchema = {
    meta: {
        path?: string
        count?: number
    }
    key?: string
    value: PrimitiveFieldValue | ComplexFieldValue
    options?: Record<string, string>
}

export const isPrimitive = (
    key: string | undefined,
    value: PrimitiveFieldValue | ComplexFieldValue
): value is PrimitiveFieldValue => {
    if (Array.isArray(value)) {
        return false
    }

    return !!value?.module && !!value?.entity
}

export const isComplex = (
    key: string | undefined,
    value: PrimitiveFieldValue | ComplexFieldValue
): value is ComplexFieldValue => {
    return !!key && Array.isArray(value)
}
