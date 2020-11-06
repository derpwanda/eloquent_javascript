const isEven = require("./recursion")

test("return true", () => {
    expect(isEven(50)).toBe(true);
})

test("return false", () => {
    expect(isEven(75)).toBe(false)
})

test("return string", () => {
    expect(isEven(-1)).toBe("Must be a positive integer.")
})