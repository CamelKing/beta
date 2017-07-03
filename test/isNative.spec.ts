import { expect, should } from 'chai';
import { isNative } from '../src/isNative';

should();

describe(`isNative() - @category Language`, () => {

  describe(`should detect if a function is native JS or user code`, () => {

    it(`Math.abs => true`, () => {

      const orig: any = Math.abs;
      const input: any = orig;
      const output: any = isNative(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`()=>123 => false`, () => {

      const f: () => number = () => 123;
      const orig: any = f;
      const input: any = orig;
      const output: any = isNative(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

  });

  describe(`should return false for non functions`, () => {

    it(`123 => false`, () => {

      const orig: any = 123;
      const input: any = orig;
      const output: any = isNative(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`'hello' => false`, () => {

      const orig: any = 'hello';
      const input: any = orig;
      const output: any = isNative(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

  });

  describe(`should return false for null and undefined`, () => {

    it(`null => false`, () => {

      const orig: any = null;
      const input: any = orig;
      const output: any = isNative(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`undefined => false`, () => {

      const orig: any = null;
      const input: any = orig;
      const output: any = isNative(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

  });

});
