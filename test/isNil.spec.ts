
import { expect, should } from 'chai';
import { isNil } from '../src/isNil';

should();

describe(`isNil() - @category Language`, () => {

  describe(`should return true for null, undefined and void 0`, () => {

    it(`null => true`, () => {
      isNil(null).should.equal(true);
    });

    it(`undefined => true`, () => {
      isNil(undefined).should.equal(true);
    });

    it(`void 0 => true`, () => {
      isNil(void 0).should.equal(true);
    });

  });

  describe(`should return false for anything non null/undefined/void 0`, () => {

    it(`123 => false`, () => {
      isNil(123).should.equal(false);
    });

    it(`0 => false`, () => {
      isNil(0).should.equal(false);
    });

    it(`"hello" => false`, () => {
      isNil('hello').should.equal(false);
    });

    it(`"" => false`, () => {
      isNil('').should.equal(false);
    });

    it(`Infinity => false`, () => {
      isNil(Infinity).should.equal(false);
    });

    it(`NaN => false`, () => {
      isNil(NaN).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`Math.abs => true`, () => {

      const orig: any = null;
      const input: any = orig;
      isNil(input).should.equal(true)
      should().equal(input, orig);

    });

  });

});
