import { should } from 'chai';
import { toInteger } from '../src/toInteger';

should();

describe(`toInteger() - @category Language`, () => {

  describe(`should return number as integer`, () => {

    it(`3 => 3`, () => {
      toInteger(3).should.equal(3);
    });

    it(`3.2 => 3`, () => {
      toInteger(3.2).should.equal(3);
    });

  });

  describe(`should return valid integer for numerical string`, () => {

    it(`"" => 0`, () => {
      toInteger('').should.deep.equal(0);
    });

    it(`" " => 0`, () => {
      toInteger(' ').should.deep.equal(0);
    });

    it(`"3" => 3`, () => {
      toInteger('3').should.equal(3);
    });

    it(`"3.2" => 3`, () => {
      toInteger('3.2').should.equal(3);
    });

  });

  describe(`should return 0 for non numerical string`, () => {

    it(`"Hello" => 0`, () => {
      toInteger('hello').should.equal(0);
    });

  });

  describe(`should return between -1.7976931348623157e+308 and 1.7976931348623157e+308`, () => {

    it(`Number.MIN_VALUE => 0`, () => {
      toInteger(Number.MIN_VALUE).should.equal(0);
    });

    it(`Infinity => 1.7976931348623157e+308`, () => {
      toInteger(Infinity).should.equal(1.7976931348623157e+308);
    });

    it(`+Infinity => +1.7976931348623157e+308`, () => {
      toInteger(+Infinity).should.equal(+1.7976931348623157e+308);
    });

    it(`-Infinity => -1.7976931348623157e+308`, () => {
      toInteger(-Infinity).should.equal(-1.7976931348623157e+308);
    });

  });

  describe(`should return NaN for non number/string/Date`, () => {
    // tslint:disable:no-unused-expression

    it(`true => NaN`, () => {
      toInteger(true).should.be.NaN;
    });

    it(`{a:1} => NaN`, () => {
      toInteger({ a: 1 }).should.be.NaN;
    });

    it(`[1,2,3] => NaN`, () => {
      toInteger([1, 2, 3]).should.be.NaN;
    });

    // tslint:enable:no-unused-expression
  });

  describe(`should return NaN for null/undefined/NaN`, () => {
    // tslint:disable:no-unused-expression

    it(`null => NaN`, () => {
      toInteger(null).should.be.NaN;
    });

    it(`undefined => NaN`, () => {
      toInteger(undefined).should.be.NaN;
    });

    it(`NaN => NaN`, () => {
      toInteger(NaN).should.be.NaN;
    });

    // tslint:enable:no-unused-expression
  });

  describe(`should be functional and not mutating any input`, () => {

    it(`3.2 => 3`, () => {

      const orig: number = 3.2;
      const input: number = orig;
      const output: number = toInteger(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(3);

    });

  });

});
