class Calculator {
    constructor() {
      this.result = 0;
    }

    add(num1, num2) {
        return num1+num2;
    }

    subtract(num1, num2) {
        return num1-num2;
    }

    divide(num1, num2) {
        return num1/num2;
    }

    multiply(num1, num2) {
        return num1*num2;
    }
  }

  module.exports = Calculator;