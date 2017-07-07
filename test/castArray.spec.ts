import { expect, should } from 'chai';
import { castArray } from '../src/castArray';

should();

describe(`castArray() - @category Language`, () => {

  describe(`should turn multiple arguments (mixed types) into array`, () => {

    it(`(1,2,3)=>[1,2,3]`, () => {
      castArray(1, 2, 3).should.deep.equal([1, 2, 3]);
    });

    it(`(false,'hello',3)=>[false,'hello',3]`, () => {
      castArray(false, 'hello', 3).should.deep.equal([false, 'hello', 3]);
    });

  });

  describe(`should return array being passed in as is`, () => {

    it(`[1,2,3]=>[1,2,3]`, () => {
      castArray([1, 2, 3]).should.deep.equal([1, 2, 3]);
    });

  });

  describe(`should cast all non-array items into an array`, () => {

    it(`({a:1})=>[{a:1}]`, () => {
      castArray({ a: 1 }).should.deep.equal([{ a: 1 }]);
    });

    it(`(1)=>[1]`, () => {
      castArray(1).should.deep.equal([1]);
    });

    it(`('hello')=>['hello']`, () => {
      castArray('hello').should.deep.equal(['hello']);
    });

    it(`(true)=>[true]`, () => {
      castArray(true).should.deep.equal([true]);
    });

  });

  describe(`should return [] if no param passed`, () => {

    it(`()=>[]`, () => {
      castArray().should.deep.equal([]);
    });

  });

  describe(`should cast null and undefined into an array`, () => {

    it(`(null)=>[null]`, () => {
      castArray(null).should.deep.equal([null]);
    });

    it(`(undefined)=>[undefined]`, () => {
      castArray(undefined).should.deep.equal([undefined]);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`(1,2,3)=>[1,2,3]`, () => {

      const orig1: number = 1;
      const orig2: number = 2;
      const orig3: number = 3;
      const input1: number = 1;
      const input2: number = 2;
      const input3: number = 3;
      castArray(input1, input2, input3).should.deep.equal([1, 2, 3]);
      input1.should.deep.equal(orig1);
      input2.should.deep.equal(orig2);
      input3.should.deep.equal(orig3);

    });

    it(`(false,'hello',3)=>[false,'hello',3]`, () => {

      const orig1: boolean = false;
      const orig2: string = 'hello';
      const orig3: number = 3;
      const input1: boolean = orig1;
      const input2: string = orig2;
      const input3: number = orig3;
      castArray(input1, input2, input3).should.deep.equal([false, 'hello', 3]);
      input1.should.deep.equal(orig1);
      input2.should.deep.equal(orig2);
      input3.should.deep.equal(orig3);

    });

  });

});
