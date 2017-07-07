import { expect, should } from 'chai';
import { gte } from '../src/gte';

should();

describe(`gte() - @category Language`, () => {

  describe(`should perform GTE comparison on numeric values`, () => {

    it(`(3,1) => true`, () => {
      gte(3, 1).should.equal(true);
    });

    it(`(3.01,3) => true`, () => {
      gte(3.01, 3).should.equal(true);
    });

    it(`(3,3) => true`, () => {
      gte(3, 3).should.equal(true);
    });

    it(`(1,3) => false`, () => {
      gte(1, 3).should.equal(false);
    });

  });

  describe(`should perform GTE comparison on numerical strings`, () => {

    it(`('3','1') => true`, () => {
      gte('3', '1').should.equal(true);
    });

    it(`('3.01','3') => true`, () => {
      gte('3.01', '3').should.equal(true);
    });

    it(`('3','3') => true`, () => {
      gte('3', '3').should.equal(true);
    });

    it(`('1','3') => false`, () => {
      gte('1', '3').should.equal(false);
    });

  });

  describe(`should perform GTE comparison on strings on alphabetical order`, () => {

    it(`('z','a') => true`, () => {
      gte('z', 'a').should.equal(true);
    });

    it(`('z','z') => true`, () => {
      gte('z', 'z').should.equal(true);
    });

    it(`('a','z') => false`, () => {
      gte('a', 'z').should.equal(false);
    });

    it(`('a','A') => true`, () => {
      gte('a', 'A').should.equal(true);
    });

    it(`('a',' ') => true`, () => {
      gte('a', ' ').should.equal(true);
    });

    it(`('a','') => true`, () => {
      gte('a', '').should.equal(true);
    });

  });

  describe(`should perform GTE comparison on mix number/strings`, () => {

    it(`(3,'1') => true`, () => {
      gte(3, '1').should.equal(true);
    });

    it(`('3.01',3) => true`, () => {
      gte('3.01', 3).should.equal(true);
    });

    it(`(3,'3') => true`, () => {
      gte(3, '3').should.equal(true);
    });

    it(`('1',3) => false`, () => {
      gte('1', 3).should.equal(false);
    });

  });

  describe(`should always treat null input as 0`, () => {

    it(`(null,3) => false`, () => {
      gte(null, 3).should.equal(false);
    });

    it(`(3,null) => true`, () => {
      gte(3, null).should.equal(true);
    });

  });

  describe(`should always treat undefined input as not comparable`, () => {

    it(`(undefined,3) => false`, () => {
      gte(undefined, 3).should.equal(false);
    });

    it(`(3,undefined) => false`, () => {
      gte(3, undefined).should.equal(false);
    });

  });

  describe(`should always return false on invalid input`, () => {

    it(`(3,'hello') => false`, () => {
      gte(3, 'hello').should.equal(false);
    });

    it(`('hello',3) => false`, () => {
      gte('hello', 3).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`('world','hello') => true`, () => {

      const orig1: string = 'world';
      const orig2: string = 'hello';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      gte(input1, input2).should.deep.equal(true);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);

    });

  });

});
