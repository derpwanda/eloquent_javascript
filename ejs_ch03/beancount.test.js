const {countBs, countChar} = require("./beancount")

test("returns ", () => {
    expect(countBs("BBC")).toBe(2);
})

test("returns ", () => {
    expect(countChar("kakkerlak", "k")).toBe(4)
})