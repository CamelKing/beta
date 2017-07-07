import { expect, should } from 'chai';
import { compact } from '../src/compact';

should();

describe(`compact() - @category Array`, () => {

  describe(`should return an array with all falsey values removed`, () => {

    it(`[false,null,0,"","hello world",undefined,NaN]=>['hello world']`, () => {
      compact([false, null, 0, '', 'hello world', undefined, NaN])
        .should.deep.equal(['hello world']);
    });

    it(`[false,null,0,"","hello","world",undefined,NaN]=>['hello','world']`, () => {
      compact([false, null, 0, '', 'hello', 'world', undefined, NaN])
        .should.deep.equal(['hello', 'world']);
    });

    it(`[false,null,0,"",true,undefined,NaN]=>[true]`, () => {
      compact([false, null, 0, '', true, undefined, NaN])
        .should.deep.equal([true]);
    });

    it(`[1,false,null,0,"",undefined,NaN,-1]=>[1,-1]`, () => {
      compact([1, false, null, 0, '', undefined, NaN, -1])
        .should.deep.equal([1, -1]);
    });

    it(`[false,null,0,"",undefined,NaN]=>[]`, () => {
      compact([false, null, 0, '', undefined, NaN]).should.deep.equal([]);
    });

    it(`[]=>[]`, () => {
      compact([]).should.deep.equal([]);
    });

  });

  describe(`should return [] with null/undefined`, () => {

    it(`null=>[]`, () => {
      compact(null).should.deep.equal([]);
    });

    it(`undefined=>[]`, () => {
      compact(undefined).should.deep.equal([]);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`[false,null,0,"","hello world",undefined,NaN]=>['hello world']`, () => {
      const orig: any[] = [false, null, 0, '', 'hello world', undefined, NaN];
      const input: any[] = orig.slice(0);
      compact(input).should.deep.equal(['hello world']);
      input.should.be.deep.equal(orig);
    });

  });

});
