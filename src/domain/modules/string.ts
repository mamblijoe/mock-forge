import { faker } from '@faker-js/faker'

class StringForge {
    public describe() {
        return Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter(
            (item) => !['constructor', 'describe'].includes(item)
        )
    }
    public fromCharacters() {
        return faker.string.fromCharacters(['a', 'b', 'c'])
    }
    public alpha() {
        return faker.string.alpha()
    }
    public alphanumeric() {
        return faker.string.alphanumeric()
    }
    public binary() {
        return faker.string.binary()
    }
    public octal() {
        return faker.string.octal()
    }
    public hexadecimal() {
        return faker.string.hexadecimal()
    }
    public numeric() {
        return faker.string.numeric()
    }
    public sample() {
        return faker.string.sample()
    }
    public uuid() {
        return faker.string.uuid()
    }
    public nanoid() {
        return faker.string.nanoid()
    }
    public symbol() {
        return faker.string.symbol()
    }
}

export default new StringForge()
