const fns = require('./problems');

xdescribe('hello', () => {
  test('should return "Hello <argument>!" if one is passed', () => {
    expect(fns.hello('Mike')).toEqual('Hello Mike!');
  });
});

xdescribe('sum', () => {
  test('should return a + b', () => {
    expect(fns.sum(1, 2)).toEqual(3);
  });
});

xdescribe('areaOfCircle', () => {
  test('should return the area of a circle given the radius', () => {
    expect(fns.areaOfCircle(4)).toEqual(50.26548245743669);
    expect(fns.areaOfCircle(10)).toEqual(314.1592653589793);
    expect(fns.areaOfCircle(1)).toEqual(3.141592653589793);
  });
});

describe('numberReverse', () => {
  test('should reverse a number', () => {
    expect(fns.numberReverse(123)).toEqual(321);
    expect(fns.numberReverse(456)).toEqual(654);
    expect(fns.numberReverse(456)).toEqual(654);
    expect(fns.numberReverse(1004)).toEqual(4001);
  });
});
