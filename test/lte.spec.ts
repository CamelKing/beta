import { should } from 'chai';
import { lte } from '../src/lte';

should();

describe(`lte() - @category Language`, () => {

  describe(`should return true if a <= b (number)`, () => {

    it(`(3,1) => false`, () => {
      lte(3, 1).should.equal(false);
    });

    it(`(3.01,3) => false`, () => {
      lte(3.01, 3).should.equal(false);
    });

    it(`(3,3) => true`, () => {
      lte(3, 3).should.equal(true);
    });

    it(`(1,3) => true`, () => {
      lte(1, 3).should.equal(true);
    });

  });

  describe(`should return true if a <= b (numerical strings)`, () => {

    it(`('3','1') => false`, () => {
      lte('3', '1').should.equal(false);
    });

    it(`('3.01','3') => false`, () => {
      lte('3.01', '3').should.equal(false);
    });

    it(`('3','3') => true`, () => {
      lte('3', '3').should.equal(true);
    });

    it(`('1','3') => true`, () => {
      lte('1', '3').should.equal(true);
    });

  });

  describe(`should return true if a <= b (string - alphabetical order)`, () => {

    it(`('z','a') => false`, () => {
      lte('z', 'a').should.equal(false);
    });

    it(`('a','z') => true`, () => {
      lte('a', 'z').should.equal(true);
    });

    it(`('a','A') => false`, () => {
      lte('a', 'A').should.equal(false);
    });

    it(`('a','a') => true`, () => {
      lte('a', 'a').should.equal(true);
    });

    it(`('a',' ') => false`, () => {
      lte('a', ' ').should.equal(false);
    });

    it(`('a','') => false`, () => {
      lte('a', '').should.equal(false);
    });

  });

  describe(`should return true if a <= b (mix number/strings)`, () => {

    it(`(3,'1') => false`, () => {
      lte(3, '1').should.equal(false);
    });

    it(`('3.01',3) => false`, () => {
      lte('3.01', 3).should.equal(false);
    });

    it(`(3,'3') => true`, () => {
      lte(3, '3').should.equal(true);
    });

    it(`('1',3) => true`, () => {
      lte('1', 3).should.equal(true);
    });

  });

  /*

    July 08 2017
    Taken care of by StrictNullChecks

  describe(`should treat null as 0`, () => {

    it(`(null,3) => true`, () => {
      lte(null, 3).should.equal(true);
    });

    it(`(3,null) => false`, () => {
      lte(3, null).should.equal(false);
    });

    it(`(null,null) => true`, () => {
      lte(null, null).should.equal(true);
    });

  });

  describe(`should return false when one/both is undefined`, () => {

    it(`(undefined,3) => false`, () => {
      lte(undefined, 3).should.equal(false);
    });

    it(`(3,undefined) => false`, () => {
      lte(3, undefined).should.equal(false);
    });

    it(`(undefined, undefined) => false`, () => {
      lte(undefined, undefined).should.equal(false);
    });

  });

  */

  describe(`should return false when one/both is NaN`, () => {

    it(`(NaN,3) => false`, () => {
      lte(NaN, 3).should.equal(false);
    });

    it(`(3,NaN) => false`, () => {
      lte(3, NaN).should.equal(false);
    });

    it(`(NaN, NaN) => false`, () => {
      lte(NaN, NaN).should.equal(false);
    });

  });

  describe(`should return false for different types`, () => {

    it(`(3,'hello') => false`, () => {
      lte(3, 'hello').should.equal(false);
    });

    it(`('hello',3) => false`, () => {
      lte('hello', 3).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`(1,3) => true`, () => {

      const orig1: number = 1;
      const orig2: number = 3;
      const input1: number = orig1;
      const input2: number = orig2;
      lte(input1, input2).should.equal(true);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);

    });

  });

});
