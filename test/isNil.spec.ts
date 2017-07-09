import { should } from 'chai';
import { isNil } from '../src/isNil';

should();

describe(`isNil() - @category Language`, () => {

  describe(`should return true for null, undefined and void 0`, () => {

    it(`null => true`, () => {
      isNil(null).should.be.true;
    });

    it(`undefined => true`, () => {
      isNil(undefined).should.be.true;
    });

    it(`void 0 => true`, () => {
      isNil(void 0).should.be.true;
    });

  });

  describe(`should return false for anything non null/undefined/void 0`, () => {

    it(`123 => false`, () => {
      isNil(123).should.be.false;
    });

    it(`0 => false`, () => {
      isNil(0).should.be.false;
    });

    it(`"hello" => false`, () => {
      isNil('hello').should.be.false;
    });

    it(`"" => false`, () => {
      isNil('').should.be.false;
    });

    it(`Infinity => false`, () => {
      isNil(Infinity).should.be.false;
    });

    it(`NaN => false`, () => {
      isNil(NaN).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`Math.abs => true`, () => {

      const orig: any = null;
      const input: any = orig;
      isNil(input).should.be.true
      should().equal(input, orig);

    });

  });

});
