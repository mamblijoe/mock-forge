import { faker } from '@faker-js/faker'

class NumberForge {
    public describe() {
        return Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter(
            (item) => !['constructor', 'describe'].includes(item)
        )
    }

    public int() {
        return faker.number.int()
    }
    public float() {
        return faker.number.float()
    }
    public binary() {
        return faker.number.binary()
    }
    public octal() {
        return faker.number.octal()
    }
    public hex() {
        return faker.number.hex()
    }
    public bigInt() {
        return faker.number.bigInt()
    }
}

export default new NumberForge()
