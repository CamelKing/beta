import { expect, should } from 'chai';
import { isObjectLike } from '../src/isObjectLike';

should();

describe(`isObjectLike() - @category Language`, () => {

  describe(`should determine if a paramter is object-like`, () => {

    it(`{} => true`, () => {

      const orig: any = {};
      const input: any = orig;
      const output: boolean = isObjectLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`{a:1} => true`, () => {

      const orig: any = { a: 1 };
      const input: any = orig;
      const output: boolean = isObjectLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`[1,2,3] => true`, () => {

      const orig: any[] = [1, 2, 3];
      const input: any[] = orig.slice(0);
      const output: boolean = isObjectLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`new Date => true`, () => {

      const orig: any = new Date;
      const input: any = orig;
      const output: boolean = isObjectLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`Date.now() => false`, () => {

      const orig: any = Date.now();
      const input: any = orig;
      const output: boolean = isObjectLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`123 => false`, () => {

      const orig: any = 123;
      const input: any = orig;
      const output: boolean = isObjectLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`NaN => false`, () => {

      const orig: any = NaN;
      const input: any = orig;
      const output: boolean = isObjectLike(input);
      input.should.not.equal(input);
      orig.should.not.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`true => false`, () => {

      const orig: any = true;
      const input: any = orig;
      const output: boolean = isObjectLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`'hello' => false`, () => {

      const orig: any = 'hello';
      const input: any = orig.slice(0);
      const output: boolean = isObjectLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`null => false`, () => {

      const orig: any = null;
      const input: any = orig;
      const output: boolean = isObjectLike(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`undefined => false`, () => {

      const orig: any = undefined;
      const input: any = orig;
      const output: boolean = isObjectLike(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

  });

});
