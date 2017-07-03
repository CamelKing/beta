import { expect, should } from 'chai';
import { isEmpty } from '../src/isEmpty';

should();

describe(`isEmpty() - @category Language`, () => {

  describe(`should return true if not a collection object`, () => {

    it(`null => true`, () => {

      const orig: any = null;
      const input: any = orig;
      const output: any = isEmpty(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`undefined => true`, () => {

      const orig: any = undefined;
      const input: any = orig;
      const output: any = isEmpty(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`123 => true`, () => {

      const orig: any = 123;
      const input: any = orig;
      const output: any = isEmpty(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`false => true`, () => {

      const orig: any = false;
      const input: any = orig;
      const output: any = isEmpty(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

  });

  describe(`should determine if empty array like object`, () => {

    it(`new Buffer('hello') => false`, () => {

      const orig: any = new Buffer('hello');
      const input: any = orig.slice(0);
      const output: any = isEmpty(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`new Buffer('') => true`, () => {

      const orig: any = new Buffer('');
      const input: any = orig.slice(0);
      const output: any = isEmpty(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`new Uint16Array(2) => false`, () => {

      const orig: any = new Uint16Array(2);
      const input: any = orig.slice(0);
      const output: any = isEmpty(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`new Uint16Array(0) => true`, () => {

      const orig: any = new Uint16Array(0);
      const input: any = orig.slice(0);
      const output: any = isEmpty(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });


    it(`'hello' => false`, () => {

      const orig: any = 'hello';
      const input: any = orig.slice(0);
      const output: any = isEmpty(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`'' => true`, () => {

      const orig: any = '';
      const input: any = orig.slice(0);
      const output: any = isEmpty(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`[1,2,3] => false`, () => {

      const orig: any = [1, 2, 3];
      const input: any = orig.slice(0);
      const output: any = isEmpty(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`[] => true`, () => {

      const orig: any = [];
      const input: any = orig.slice(0);
      const output: any = isEmpty(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });


  });

  describe(`should determine if empty object/collection/map/set`, () => {


    it(`new Map([['a', 1]]) => false`, () => {

      const orig: any = new Map([['a', 1]]);
      const input: any = orig;
      const output: any = isEmpty(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`new Map([]) => true`, () => {

      const orig: any = new Map([]);
      const input: any = orig;
      const output: any = isEmpty(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });


    it(`new Set([1, 2, 3]) => false`, () => {

      const orig: any = new Set([1, 2, 3]);
      const input: any = orig;
      const output: any = isEmpty(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`new Set([]) => false`, () => {

      const orig: any = new Set([]);
      const input: any = orig;
      const output: any = isEmpty(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`{a:1} => false`, () => {

      const orig: any = { a: 1 };
      const input: any = orig;
      const output: any = isEmpty(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`{} => true`, () => {

      const orig: any = {};
      const input: any = orig;
      const output: any = isEmpty(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

  });

});
