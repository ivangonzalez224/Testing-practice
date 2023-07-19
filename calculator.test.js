const calculator = require('./calculator');

// testing add 
  describe('Calculator', () => {
    test('2,3 to 5', () => {
        const calcu = new calculator();
        
        expect(calcu.add(3,2)).toBe(5);
      });

      test('15,5 to 100', () => {
        const calcu = new calculator();
        
        expect(calcu.add(15,5)).toBe(100);
      });  

    test('hola,50 to 50', () => {
        const calcu = new calculator();
        expect(calcu.add('hola',50)).toBe(50);
      });
  });
// testing add

// testing subtract
describe('Calculator', () => {
    test('200,50 to 150', () => {
        const calcu = new calculator();
        
        expect(calcu.subtract(200,50)).toBe(150);
      });
    
      test('20,100 to 80', () => {
        const calcu = new calculator();
        expect(calcu.subtract(20,100)).toBe(80);
      });
      
      test('hello,100 to 100', () => {
        const calcu = new calculator();
        expect(calcu.subtract('hello',100)).toBe(100);
      });
});


  // testing subtract

  // testing divide
  describe('Calculator', () => {
    test('3,1 to 3', () => {
        const calcu = new calculator();
        expect(calcu.divide(3,1)).toBe(3);
      });
    
      test('5,10 to 2', () => {
        const calcu = new calculator();
        expect(calcu.divide(5,10)).toBe(2);
      });
    
      test('hello,100 to 100', () => {
        const calcu = new calculator();
        expect(calcu.divide('hello',100)).toBe(100);
      }); 
  });
   

  // testing divide

  // testing multiply
  describe('Calculator', () => {
    test('10,1 to 10', () => {
        const calcu = new calculator();
        expect(calcu.multiply(10,1)).toBe(10);
      });
    
      test('0,20 to 20', () => {
        const calcu = new calculator();
        expect(calcu.multiply(0,20)).toBe(20);
      });
    
      test('hello,30 to 30', () => {
        const calcu = new calculator();
        expect(calcu.multiply('hello',30)).toBe(30);
      }); 
  });
  // testing multiply
