import { expect, should } from 'chai';
import { isPlainObject } from '../src/isPlainObject';

should();

describe(`isPlainObject() - @category Language`, () => {

  describe(`should return false for null and undefined`, () => {

    it(`null => false`, () => {

      const orig: any = null;
      const input: any = orig;
      const output: any = isPlainObject(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`undefined => false`, () => {

      const orig: any = undefined;
      const input: any = orig;
      const output: any = isPlainObject(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

  });

  describe(`should correctly detect plain object`, () => {

    it(`{} => true`, () => {

      const orig: any = {};
      const input: any = orig;
      const output: any = isPlainObject(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`{a:1} => true`, () => {

      const orig: any = { a: 1 };
      const input: any = orig;
      const output: any = isPlainObject(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`Object.create(null) => true`, () => {

      const orig: any = Object.create(null);
      const input: any = orig;
      const output: any = isPlainObject(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`Object(null) => true`, () => {

      const orig: any = Object(null);
      const input: any = orig;
      const output: any = isPlainObject(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`()=>123 => false`, () => {

      const orig: any = () => 123;
      const input: any = orig;
      const output: any = isPlainObject(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`new Date() => false`, () => {

      const orig: any = new Date();
      const input: any = orig;
      const output: any = isPlainObject(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`[1,2,3] => false`, () => {

      const orig: any = [1, 2, 3];
      const input: any = orig;
      const output: any = isPlainObject(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });


  });

});
