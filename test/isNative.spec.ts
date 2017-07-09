import { should } from 'chai';
import { isNative } from '../src/isNative';

should();

describe(`isNative() - @category Language`, () => {

  describe(`should detect if a function is native JS or user code`, () => {

    it(`Math.abs => true`, () => {
      isNative(Math.abs).should.be.true;
    });

    it(`()=>123 => false`, () => {
      isNative(() => 123).should.be.false;
    });

  });

  describe(`should return false for promise`, () => {

    it(`Promise.resolve(123) => false`, () => {
      isNative(Promise.resolve(123)).should.be.false;
    });

    it(`Promise.resolve(Math.abs) => false`, () => {
      isNative(Promise.resolve(Math.abs)).should.be.false;
    });

  });

  describe(`should return false for non functions`, () => {

    it(`123 => false`, () => {
      isNative(123).should.be.false;
    });

    it(`'hello' => false`, () => {
      isNative('hello').should.be.false;
    });

  });

  describe(`should return false for null and undefined`, () => {

    it(`null => false`, () => {
      isNative(null).should.be.false;
    });

    it(`undefined => false`, () => {
      isNative(undefined).should.be.false;
    });

    it(`NaN => false`, () => {
      isNative(NaN).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`Math.abs => true`, () => {

      const orig: any = Math.abs;
      const input: any = orig;
      isNative(input).should.be.true;
      input.should.be.deep.equal(orig);

    });

  });


});
