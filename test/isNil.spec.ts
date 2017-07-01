
import { expect, should } from 'chai';
import { isNil } from '../src/isNil';

should();

describe(`isNil() - @category Language`, () => {

  describe(`should check for null or undefined`, () => {

    it(`null => true`, () => {
      isNil(null).should.equal(true);
    });

    it(`undefined => true`, () => {
      isNil(undefined).should.equal(true);
    });

    it(`void 0 => true`, () => {
      isNil(void 0).should.equal(true);
    });

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

});
