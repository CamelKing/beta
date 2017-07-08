import { should } from 'chai';
import { toFinite } from '../src/toFinite';

should();

describe(`toFinite() - @category Language`, () => {

  describe(`should return number as finite number`, () => {

    it(`3 => 3`, () => {
      toFinite(3).should.deep.equal(3);
    });

    it(`3.2 => 3.2`, () => {
      toFinite(3.2).should.deep.equal(3.2);
    });

  });

  describe(`should return finite number for numerical string`, () => {

    it(`"" => 0`, () => {
      toFinite('').should.deep.equal(0);
    });

    it(`" " => 0`, () => {
      toFinite(' ').should.deep.equal(0);
    });

    it(`"3" => 3`, () => {
      toFinite('3').should.deep.equal(3);
    });

    it(`"3.2" => 3.2`, () => {
      toFinite('3.2').should.deep.equal(3.2);
    });

  });

  describe(`should return 0 for non numerical string`, () => {

    it(`"Hello" => 0`, () => {
      toFinite('Hello').should.deep.equal(0);
    });

  });

  describe(`should return between -1.7976931348623157e+308 and 1.7976931348623157e+308`, () => {

    it(`Number.MIN_VALUE => 5e-324`, () => {
      toFinite(Number.MIN_VALUE).should.equal(5e-324);
    });

    it(`Infinity => 1.7976931348623157e+308`, () => {
      toFinite(Infinity).should.equal(1.7976931348623157e+308);
    });

    it(`+Infinity => +1.7976931348623157e+308`, () => {
      toFinite(+Infinity).should.equal(+1.7976931348623157e+308);
    });

    it(`-Infinity => -1.7976931348623157e+308`, () => {
      toFinite(-Infinity).should.equal(-1.7976931348623157e+308);
    });

  });

  describe(`should return NaN for non number/string/Date`, () => {
    // tslint:disable:no-unused-expression

    it(`true => NaN`, () => {
      toFinite(true).should.be.NaN;
    });

    it(`{a:1} => NaN`, () => {
      toFinite({ a: 1 }).should.be.NaN;
    });

    it(`[1,2,3] => NaN`, () => {
      toFinite([1, 2, 3]).should.be.NaN;
    });

    // tslint:enable:no-unused-expression
  });

  describe(`should return NaN for null/undefined/NaN`, () => {
    // tslint:disable:no-unused-expression

    it(`null => NaN`, () => {
      toFinite(null).should.be.NaN;
    });

    it(`undefined => NaN`, () => {
      toFinite(NaN).should.be.NaN;
    });

    it(`NaN => NaN`, () => {
      toFinite(NaN).should.be.NaN;
    });

    // tslint:enable:no-unused-expression
  });

  describe(`should be functional and not mutating any input`, () => {

    it(`3.2 => 3.2`, () => {

      const orig: number = 3.2;
      const input: number = orig;
      toFinite(input).should.equal(3.2);
      input.should.equal(orig);

    });

  });

});
