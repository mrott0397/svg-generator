const Shape = require('../library/shape');

class Triangle extends Shape {
    constructor(shape, shapeColor, text, textColor) {
        super(shape, shapeColor, text, textColor)
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${this.shape} points="150,18 244,182 56, 182" fill="${this.shapeColor}"/>
      
        <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}
module.exports = Triangle