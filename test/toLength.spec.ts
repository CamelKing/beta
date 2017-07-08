import { should } from 'chai';
import { MAX_ARRAY_LENGTH } from '../src/constant';
import { toLength } from '../src/toLength';

should();

describe(`toLength() - @category Language`, () => {

  describe(`should return number as valid array length`, () => {

    it(`3.2 => 3`, () => {
      toLength(3.2).should.equal(3);
    });

    it(`3 => 3`, () => {
      toLength(3).should.equal(3);
    });

  });

  describe(`should return valid length integer for numerical string`, () => {

    it(`"" => 0`, () => {
      toLength('').should.deep.equal(0);
    });

    it(`" " => 0`, () => {
      toLength(' ').should.deep.equal(0);
    });

    it(`"3.2" => 3`, () => {
      toLength('3.2').should.equal(3);
    });

    it(`"3" => 3`, () => {
      toLength('3').should.equal(3);
    });

  });

  describe(`should return 0 for non numerical string`, () => {

    it(`"hello" => 0`, () => {
      toLength('hello').should.equal(0);
    });

  });

  describe(`should return between 0 and MAX_ARRAY_LENGTH`, () => {

    it(`Number.MIN_VALUE => 0`, () => {
      toLength(Number.MIN_VALUE).should.equal(0);
    });

    it(`Number.MAX_VALUE => 4294967295`, () => {
      toLength(Number.MAX_VALUE).should.equal(MAX_ARRAY_LENGTH); // 4294967295
    });

    it(`-Infinity => 0`, () => {
      toLength(-Infinity).should.equal(0);
    });

    it(`Infinity => 4294967295`, () => {
      toLength(Infinity).should.equal(MAX_ARRAY_LENGTH); // 4294967295
    });

  });

  describe(`should return NaN for non number/string/Date`, () => {
    // tslint:disable:no-unused-expression

    it(`true => NaN`, () => {
      toLength(true).should.be.NaN;
    });

    it(`{a:1} => NaN`, () => {
      toLength({ a: 1 }).should.be.NaN;
    });

    it(`[1,2,3] => NaN`, () => {
      toLength([1, 2, 3]).should.be.NaN;
    });

    // tslint:enable:no-unused-expression
  });

  describe(`should return NaN for null/undefined/NaN`, () => {
    // tslint:disable:no-unused-expression

    it(`null => NaN`, () => {
      toLength(null).should.be.NaN;
    });

    it(`undefined => NaN`, () => {
      toLength(undefined).should.be.NaN;
    });
    it(`NaN => NaN`, () => {
      toLength(NaN).should.be.NaN;
    });

    // tslint:enable:no-unused-expression
  });

  describe(`should be functional and not mutating any input`, () => {

    it(`3.2 => 3`, () => {

      const orig: number = 3.2;
      const input: number = orig;
      const output: number = toLength(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(3);

    });

  });

});
