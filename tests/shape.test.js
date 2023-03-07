const Shape = require("../library/shape")

test('testing shape', () => {
    let testShape = new Shape('circle', 'white', 'HEP', 'blue');
    expect(testShape.shape).toBe('circle');
    expect(testShape.shapeColor).toBe('white');
    expect(testShape.text).toBe('HEP');
    expect(testShape.textColor).toBe('blue')
})