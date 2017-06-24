import { expect, should } from 'chai';
import { isBoolean } from '../src/isBoolean';

should();

describe.only(`isBoolean() - @category Language`, () => {

  describe(`should identify a boolean`, () => {

    it(`true => true`, () => {

      const orig: boolean = true;
      const input: boolean = orig;
      const output: boolean = isBoolean(input);
      input.should.be.deep.equal(orig);
      output.should.equal(true);

    });

    it(`false => true`, () => {

      const orig: boolean = false;
      const input: boolean = orig;
      const output: boolean = isBoolean(input);
      input.should.be.deep.equal(orig);
      output.should.equal(true);

    });

    it(`1+1===2 => true`, () => {

      const orig: boolean = (1 + 1 === 2);
      const input: boolean = orig;
      const output: boolean = isBoolean(input);
      input.should.be.deep.equal(orig);
      output.should.equal(true);

    });

    it(`1+1!==2 => true`, () => {

      const orig: boolean = (1 + 1 !== 2);
      const input: boolean = orig;
      const output: boolean = isBoolean(input);
      input.should.be.deep.equal(orig);
      output.should.equal(true);

    });

  });

  describe(`should identify non boolean`, () => {

    it(`'true' => false`, () => {

      const orig: string = 'true';
      const input: string = orig.slice(0);
      const output: boolean = isBoolean(input);
      input.should.be.deep.equal(orig);
      output.should.equal(false);

    });

    it(`'false' => false`, () => {

      const orig: string = 'false';
      const input: string = orig.slice(0);
      const output: boolean = isBoolean(input);
      input.should.be.deep.equal(orig);
      output.should.equal(false);

    });

    it(`123 => false`, () => {

      const orig: number = 123;
      const input: number = orig;
      const output: boolean = isBoolean(input);
      input.should.be.deep.equal(orig);
      output.should.equal(false);

    });

  });

});
