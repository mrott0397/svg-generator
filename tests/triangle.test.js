const Triangle = require("../library/triangle")

test("testing triangle", ()=>{
    let testTriangle = new Triangle("triangle", "red", "MOO", "white");
    expect(testTriangle.shape).toBe("triangle");
    expect(testTriangle.shapeColor).toBe("red");
    expect(testTriangle.text).toBe("MOO");
    expect(testTriangle.textColor).toBe("white");
})