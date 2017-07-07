import { expect, should } from 'chai';
import { eq } from '../src/eq';

should();

describe(`eq() - @category Language`, () => {

  describe(`should do a SameValueZero false comparisons`, () => {

    it(`0 !== false`, () => {
      eq(0, false).should.equal(false);
    });

    it(`"" !== false`, () => {
      eq('', false).should.equal(false);
    });

    it(`"" !== 0`, () => {
      eq('', 0).should.equal(false);
    });

    it(`"0" !== 0`, () => {
      eq('0', 0).should.equal(false);
    });

    it(`"17" !== 17`, () => {
      eq('17', 17).should.equal(false);
    });

    it(`[1,2] !== '1,2'`, () => {
      eq([1, 2], '1,2').should.equal(false);
    });

    it(`null !== undefined`, () => {
      eq(null, undefined).should.equal(false);
    });

    it(`null !== false`, () => {
      eq(null, false).should.equal(false);
    });

    it(`undefined !== false`, () => {
      eq(undefined, false).should.equal(false);
    });

    it(`{foo:'bar'} !== {foo:'bar'}`, () => {
      eq({ foo: 'bar' }, { foo: 'bar' }).should.equal(false);
    });

    it(`[1,2,3] !== [1,2,3]`, () => {
      eq([1, 2, 3], [1, 2, 3]).should.equal(false);
    });

    it(`0 !== null`, () => {
      eq(0, null).should.equal(false);
    });

    it(`0 !== undefined`, () => {
      eq(0, undefined).should.equal(false);
    });

    it(`0 !== NaN`, () => {
      eq(0, NaN).should.equal(false);
    });

    it(`'foo' !== NaN`, () => {
      eq('foo', NaN).should.equal(false);
    });

  });

  describe(`should do a SameValueZero true comparisons`, () => {

    it(`true === true`, () => {
      eq(true, true).should.equal(true);
    });

    it(`false === false`, () => {
      eq(false, false).should.equal(true);
    });

    it(`'hello' === 'hello'`, () => {
      eq('hello', 'hello').should.equal(true);
    });

    it(`0 === 0`, () => {
      eq(0, 0).should.equal(true);
    });

    it(`+0 === -0`, () => {
      eq(+0, -0).should.equal(true);
    });

    it(`a === a (object)`, () => {
      const a: object = { foo: 'bar' };
      eq(a, a).should.equal(true);
    });

    it(`a === a (array)`, () => {
      const a: number[] = [1, 2, 3];
      eq(a, a).should.equal(true);
    });

    it(`a === a (string)`, () => {
      const a: string = 'hello';
      eq(a, a).should.equal(true);
    });

  });

  describe(`should compare null/undefined/NaN correctly`, () => {

    it(`undefined === undefined`, () => {
      eq(undefined, undefined).should.equal(true);
    });

    it(`null === null`, () => {
      eq(null, null).should.equal(true);
    });

    it(`NaN === NaN`, () => {
      eq(NaN, NaN).should.equal(true);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`'hello' === 'hello'`, () => {
      const orig: string = 'hello';
      const input1: string = orig.slice(0);
      const input2: string = orig.slice(0);
      eq(input1, input2).should.equal(true);
      input1.should.deep.equal(orig);
      input2.should.deep.equal(orig);
    });

    it(`100 !== 200`, () => {
      const orig1: number = 100;
      const orig2: number = 200;
      const input1: number = orig1;
      const input2: number = orig2;
      eq(input1, input2).should.equal(false);
      input1.should.deep.equal(orig1);
      input2.should.deep.equal(orig2);
    });

  });

});
