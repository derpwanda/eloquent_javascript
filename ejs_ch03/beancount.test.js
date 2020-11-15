const {countBs, countChar} = require("./beancount")

test("returns ", () => {
    expect(countBs("BBCb")).toBe(2);
})

test("returns ", () => {
    expect(countChar("kakkerlak", "k")).toBe(4)
})