const Circle = require("../library/circle")

test("testing ciricle", ()=>{
    let testCircle = new Circle("circle", "blue", "MOO", "white");
    expect(testCircle.shape).toBe("circle");
    expect(testCircle.shapeColor).toBe("blue");
    expect(testCircle.text).toBe("MOO");
    expect(testCircle.textColor).toBe("white");
})