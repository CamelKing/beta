import { expect, should } from 'chai';
import { hasUnicode } from '../src/hasUnicode';

should();

describe(`hasUnicode() - @category Language`, () => {

  describe(`should detect if unicode characters exist within a string`, () => {

    it(`'hello 💣 world' => true`, () => {

      const orig: string = 'hello 💣 world';
      const input: string = orig.slice(0);
      const output: boolean = hasUnicode(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`'' => false`, () => {

      const orig: string = '';
      const input: string = orig.slice(0);
      const output: boolean = hasUnicode(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`'hello world' => false`, () => {

      const orig: string = 'hello world';
      const input: string = orig.slice(0);
      const output: boolean = hasUnicode(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

  });

  describe(`should handle null and undefined`, () => {


    it(`null => false`, () => {

      const orig: string = null;
      const input: string = orig;
      const output: boolean = hasUnicode(input);
      should().equal(input, orig);
      output.should.deep.equal(false);

    });

    it(`undefined => false`, () => {

      const orig: string = undefined;
      const input: string = orig;
      const output: boolean = hasUnicode(input);
      should().equal(input, orig);
      output.should.deep.equal(false);

    });

  });


});
