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

  describe(`should return 0 for NaN`, () => {

    it(`NaN => 0`, () => {
      toLength(NaN).should.equal(0);
    });

  });

  /*

    July 08 2017
    Taken care of by StrictNullChecks

    describe(`should return 0 for null/undefined`, () => {

      it(`null => 0`, () => {
       toLength(null).should.equal(0);
      });

      it(`undefined => 0`, () => {
        toLength(undefined).should.equal(0);
      });

    });

  */

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
