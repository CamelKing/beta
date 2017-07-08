import { should } from 'chai';
import { toNumber } from '../src/toNumber';

should();

describe(`toNumber() - @category Language`, () => {

  describe(`should convert a number to number`, () => {

    it(`Infinity => Infinity`, () => {
      // while Infinity is printed as 1.7976931348623157e+308, but it can't be compare as equal to the number, hence must use Infinity for comparison.
      toNumber(Infinity).should.equal(Infinity);
    });

    it(`Number.MAX_VALUE => 1.7976931348623157e+308`, () => {
      toNumber(Number.MAX_VALUE).should.equal(1.7976931348623157e+308);
    });

    it(`Number.MIN_VALUE => 5e-324`, () => {
      toNumber(Number.MIN_VALUE).should.equal(5e-324);
    });

    it(`Number.MAX_SAFE_INTEGER => 9007199254740991`, () => {
      toNumber(Number.MAX_SAFE_INTEGER).should.equal(9007199254740991);
    });

    it(`Number.MIN_SAFE_INTEGER => -9007199254740991`, () => {
      toNumber(Number.MIN_SAFE_INTEGER).should.equal(-9007199254740991);
    });

    it(`1e3 => 1e3`, () => {
      toNumber(1e3).should.equal(1e3);
    });

    it(`3.2 => 3.2`, () => {
      toNumber(3.2).should.equal(3.2);
    });

    it(`3 => 3`, () => {
      toNumber(3).should.equal(3);
    });

  });

  describe(`should convert a numeric string to number`, () => {

    it(`'123' => 123`, () => {
      toNumber('123').should.equal(123);
    });

    it(`'123.456' => 123.456`, () => {
      toNumber('123.456').should.equal(123.456);
    });

    it(`'Infinity' => Infinity`, () => {
      toNumber('Infinity').should.equal(Infinity);
    });

    it(`'0b1110' => 14`, () => {
      toNumber('0b1110').should.equal(14);
    });

    it(`'0o17' => 15`, () => {
      toNumber('0o17').should.equal(15);
    });

    it(`'0x1F' => 31`, () => {
      toNumber('0x1F').should.equal(31);
    });

  });

  describe(`should convert date value to universal time value`, () => {

    it(`new Date() => time in ms`, () => {
      const d: Date = new Date();
      toNumber(d).should.equal(d.getTime());
    });

  });

  describe(`should convert boolean value to 1 and 0`, () => {

    it(`true => 1`, () => {
      toNumber(true).should.equal(1);
    });

    it(`false => 0`, () => {
      toNumber(false).should.equal(0);
    });

  });

  describe(`should convert a numeric object to number`, () => {

    it(`new Object(123) => 123`, () => {
      toNumber(new Object(123)).should.equal(123);
    });

    it(`new Object('456') => 456`, () => {
      toNumber(new Object('456')).should.equal(456);
    });

  });

  // tslint:disable:no-unused-expression

  describe(`should return NaN for non numeric string`, () => {


    it(`'hello' => NaN`, () => {
      toNumber('hello').should.be.NaN;
    });

    it(`'0b23' => NaN`, () => {
      toNumber('0b23').should.be.NaN;
    });

    it(`'0O99' => NaN`, () => {
      toNumber('0O99').should.be.NaN;
    });

    it(`'0XGG' => NaN`, () => {
      toNumber('0XGG').should.be.NaN;
    });

    it(`'NaN' => NaN`, () => {
      toNumber(NaN).should.be.NaN;
    });

  });

  describe(`should return NaN for all non numeric object`, () => {

    it(`new Object('hello') => NaN`, () => {
      toNumber(new Object('hello')).should.be.NaN;
    });

    it(`new Object({a:1}) => NaN`, () => {
      toNumber(new Object({ a: 1 })).should.be.NaN;
    });

    it(`Symbol() => NaN`, () => {
      toNumber(Symbol()).should.be.NaN;
    });

    it(`new Error() => NaN`, () => {
      toNumber(new Error()).should.be.NaN;
    });

    it(`()=>'hello' => NaN`, () => {
      toNumber(() => 'hello').should.be.NaN;
    });

  });

  // tslint:enable:no-unused-expression

  describe(`should be functional and not mutating any input`, () => {

    it(`'123' => 123`, () => {

      const orig: string = '123';
      const input: string = orig.slice(0);
      toNumber(input).should.equal(123);
      input.should.be.equal(orig);

    });

  });

});
