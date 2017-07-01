import { expect, should } from 'chai';
import { stringToArray } from '../src/stringToArray';

should();

describe(`stringToArray() - @category Language`, () => {

  describe(`should convert a string containing unicode to an array`, () => {

    it(`'💣💣💣' => ['💣','💣','💣']`, () => {

      const orig: string = '💣💣💣';
      const input: string = orig.slice(0);
      const output: string[] = stringToArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(3);
      output.should.deep.equal(['💣', '💣', '💣']);

    });

    it(`'' => []`, () => {

      const orig: string = '';
      const input: string = orig.slice(0);
      const output: string[] = stringToArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

  });

  describe(`should handle non unicode string just fine`, () => {

    it(`'hello' => ['h','e','l','l','o']`, () => {

      const orig: string = 'hello';
      const input: string = orig.slice(0);
      const output: string[] = stringToArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(5);
      output.should.deep.equal(['h', 'e', 'l', 'l', 'o']);

    });

    it(`'  ' => [' ',' ']`, () => {

      const orig: string = '  ';
      const input: string = orig.slice(0);
      const output: string[] = stringToArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(2);
      output.should.deep.equal([' ', ' ']);

    });

  });

  describe(`should return empty array for null and undefined input`, () => {

    it(`null => []`, () => {

      const orig: string = null;
      const input: string = orig;
      const output: string[] = stringToArray(input);
      should().equal(input, orig);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

    it(`undefined => []`, () => {

      const orig: string = undefined;
      const input: string = orig;
      const output: string[] = stringToArray(input);
      should().equal(input, orig);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });


  });


});
