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