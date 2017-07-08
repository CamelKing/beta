import { should } from 'chai';
import { isNative } from '../src/isNative';

should();

describe(`isNative() - @category Language`, () => {

  describe(`should detect if a function is native JS or user code`, () => {

    it(`Math.abs => true`, () => {
      isNative(Math.abs).should.equal(true);
    });

    it(`()=>123 => false`, () => {
      isNative(() => 123).should.equal(false);
    });

  });

  describe(`should return false for promise`, () => {

    it(`Promise.resolve(123) => false`, () => {
      isNative(Promise.resolve(123)).should.equal(false);
    });

    it(`Promise.resolve(Math.abs) => false`, () => {
      isNative(Promise.resolve(Math.abs)).should.equal(false);
    });

  });

  describe(`should return false for non functions`, () => {

    it(`123 => false`, () => {
      isNative(123).should.equal(false);
    });

    it(`'hello' => false`, () => {
      isNative('hello').should.equal(false);
    });

  });

  describe(`should return false for null and undefined`, () => {

    it(`null => false`, () => {
      isNative(null).should.equal(false);
    });

    it(`undefined => false`, () => {
      isNative(undefined).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`Math.abs => true`, () => {

      const orig: any = Math.abs;
      const input: any = orig;
      isNative(input).should.equal(true);
      input.should.be.deep.equal(orig);

    });

  });


});
