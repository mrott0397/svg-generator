const Square = require("../library/square")

test("testing square", ()=>{
    let testSquare = new Square("square", "red", "MOO", "white");
    expect(testSquare.shape).toBe("square");
    expect(testSquare.shapeColor).toBe("red");
    expect(testSquare.text).toBe("MOO");
    expect(testSquare.textColor).toBe("white");
})