const Circle = require("../library/circle")

test("testing ciricle", ()=>{
    let testCircle = new Circle("circle", "blue", "testText", "magenta")
    expect(testCircle.shape).toBe("circle")
    expect(testCircle.shapeColor).toBe("blue")
    expect(testCircle.text).toBe("testText")
    expect(testCircle.textColor).toBe("magenta")
})