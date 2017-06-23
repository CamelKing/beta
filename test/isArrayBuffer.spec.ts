import { expect, should } from 'chai';
import { isArrayBuffer } from '../src/isArrayBuffer';

should();

describe(`isArrayBuffer() - @category Language`, () => {

  describe(`should identify an array buffer`, () => {

    it(`new ArrayBuffer(2) => true`, () => {

      const orig: ArrayBuffer = new ArrayBuffer(2);
      const input: ArrayBuffer = orig.slice(0);
      const output: boolean = isArrayBuffer(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.equal(true);

    });

  });

  describe(`should identify non array buffer`, () => {

    it(`'new Array(2)' => false`, () => {

      const orig: string[] = new Array(2);
      const input: string[] = orig.slice(0);
      const output: boolean = isArrayBuffer(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.equal(false);

    });

  });

});
