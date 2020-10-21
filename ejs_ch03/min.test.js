const min = require("./min");

test("returns 15 minimum value", () => {
    expect(min(87, 15)).toBe(15);
})

test("returns 7 minimum value", () => {
    expect(min(7, 37)).toBe(7);
})

test("returns 1 minimum value", () => {
    expect(min(1, 1)).toBe(1);
})

test("returns -1 minimum value", () => {
    expect(min(3, -1)).toBe(-1)
})

test("returns -16.7 minimum value", () => {
    expect(min(16.7, 16.8)).toBe(16.7)
})

test("returns 0 minimum value", () => {
    expect(min(0, 0)).toBe(0)
})