import { should } from 'chai';
import { isTypedArray } from '../src/isTypedArray';

should();

describe(`isTypedArray() - @category Language`, () => {

  describe(`should return true for typed array`, () => {

    it(`new Uint8Array => true`, () => {
      isTypedArray(new Uint8Array(1)).should.be.true;
    });

    it(`new Int8Array(1) => true`, () => {
      isTypedArray(new Int8Array(1)).should.be.true;
    });

    it(`new Uint8ClampedArray(1) => true`, () => {
      isTypedArray(new Uint8ClampedArray(1)).should.be.true;
    });

    it(`new Uint16Array(1) => true`, () => {
      isTypedArray(new Uint16Array(1)).should.be.true;
    });

    it(`new Int16Array(1) => true`, () => {
      isTypedArray(new Int16Array(1)).should.be.true;
    });

    it(`new Uint32Array(1) => true`, () => {
      isTypedArray(new Uint32Array(1)).should.be.true;
    });

    it(`new Int32Array(1) => true`, () => {
      isTypedArray(new Int32Array(1)).should.be.true;
    });

    it(`new Float32Array(1) => true`, () => {
      isTypedArray(new Float32Array(1)).should.be.true;
    });

    it(`new Float64Array(1) => true`, () => {
      isTypedArray(new Float64Array(1)).should.be.true;
    });

  });

  describe(`should return false for non typed array`, () => {

    it(`[] => false`, () => {
      isTypedArray([]).should.be.false;
    });

    it(`[1,2,3] => false`, () => {
      isTypedArray([1, 2, 3]).should.be.false;
    });

    it(`123 => false`, () => {
      isTypedArray(123).should.be.false;
    });

    it(`NaN => false`, () => {
      isTypedArray(NaN).should.be.false;
    });

    it(`'hello' => false`, () => {
      isTypedArray('hello').should.be.false;
    });

  });

  describe(`should return false for null/undefined/NaN`, () => {

    it(`null => false`, () => {
      isTypedArray(null).should.be.false;
    });

    it(`undefined => false`, () => {
      isTypedArray(undefined).should.be.false;
    });

    it(`NaN => false`, () => {
      isTypedArray(NaN).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`new Uint8Array => true`, () => {

      const orig: any = new Uint8Array(1);
      const input: any = orig.slice(0);
      isTypedArray(input).should.be.true;
      input.should.be.deep.equal(orig);

    });

  });

});
