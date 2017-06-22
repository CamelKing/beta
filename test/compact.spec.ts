import { expect, should } from 'chai';
import { compact } from '../src/compact';

should();

describe(`compact() - @category Array`, () => {

  describe(`should return an array with all falsey values removed`, () => {

    it(`[false,null,0,"","hello world",undefined,NaN]=>['hello world']`, () => {
      const orig: any[] = [false, null, 0, '', 'hello world', undefined, NaN];
      const input: any[] = orig.slice(0);
      const output: any[] = compact(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(1);
      output.should.deep.equal(['hello world']);
    });

    it(`[false,null,0,"",true,undefined,NaN]=>[true]`, () => {
      const orig: any[] = [false, null, 0, '', true, undefined, NaN];
      const input: any[] = orig.slice(0);
      const output: any[] = compact(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(1);
      output.should.deep.equal([true]);
    });

    it(`[1,false,null,0,"",undefined,NaN,-1]=>[1,-1]`, () => {
      const orig: any[] = [1, false, null, 0, '', undefined, NaN, -1];
      const input: any[] = orig.slice(0);
      const output: any[] = compact(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(2);
      output.should.deep.equal([1, -1]);
    });

    it(`[false,null,0,"",undefined,NaN]=>[]`, () => {
      const orig: any[] = [false, null, 0, '', undefined, NaN];
      const input: any[] = orig.slice(0);
      const output: any[] = compact(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(0);
    });

    it(`[]=>[]`, () => {
      const orig: string[] = [];
      const input: string[] = orig.slice(0);
      const output: string[] = compact(input);
      output.should.have.lengthOf(0);
    });

  });

  describe(`should return [] with invalid parameters`, () => {

    it(`null=>[]`, () => {
      const input: string[] = null;
      const output: string[] = compact(input);
      output.should.have.lengthOf(0);
      output.should.not.equal(input);
      output.should.deep.equal([]);
    });

    it(`undefined=>[]`, () => {
      const input: string[] = undefined;
      const output: string[] = compact(input);
      output.should.have.lengthOf(0);
      output.should.not.equal(input);
      output.should.deep.equal([]);
    });

  });


});
