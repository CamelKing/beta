import { expect, should } from 'chai';
import { gt } from '../src/gt';

should();

describe(`gt() - @category Language`, () => {

  describe(`should perform Greater Than comparison on numeric values`, () => {

    it(`(3,1) => true`, () => {
      gt(3, 1).should.equal(true);
    });

    it(`(3.01,3) => true`, () => {
      gt(3.01, 3).should.equal(true);
    });

    it(`(3,3) => false`, () => {
      gt(3, 3).should.equal(false);
    });

    it(`(1,3) => false`, () => {
      gt(1, 3).should.equal(false);
    });

  });

  describe(`should perform Greater Than comparison on numerical strings`, () => {

    it(`('3','1') => true`, () => {
      gt('3', '1').should.equal(true);
    });

    it(`('3.01','3') => true`, () => {
      gt('3.01', '3').should.equal(true);
    });

    it(`('3','3') => false`, () => {
      gt('3', '3').should.equal(false);
    });


    it(`('1','3') => false`, () => {
      gt('1', '3').should.equal(false);
    });

  });

  describe(`should perform Greater Than comparison on strings on alphabetical order`, () => {

    it(`('z','a') => true`, () => {
      gt('z', 'a').should.equal(true);
    });

    it(`('a','z') => false`, () => {
      gt('a', 'z').should.equal(false);
    });

    it(`('a','A') => true`, () => {
      gt('a', 'A').should.equal(true);
    });

    it(`('a',' ') => true`, () => {
      gt('a', ' ').should.equal(true);
    });

    it(`('a','') => true`, () => {
      gt('a', '').should.equal(true);
    });

  });

  describe(`should perform Greater Than comparison on mix number/strings`, () => {

    it(`(3,'1') => true`, () => {
      gt(3, '1').should.equal(true);
    });

    it(`('3.01',3) => true`, () => {
      gt('3.01', 3).should.equal(true);
    });

    it(`(3,'3') => false`, () => {
      gt(3, '3').should.equal(false);
    });

    it(`('1',3) => false`, () => {
      gt('1', '3').should.equal(false);
    });

  });

  describe(`should always return false on invalid input`, () => {

    it(`(3,'hello') => false`, () => {
      gt(3, 'hello').should.equal(false);
    });

    it(`('hello',3) => false`, () => {
      gt('hello', 3).should.equal(false);
    });

  });

  describe(`should always treat null input as 0`, () => {

    it(`(null,3) => false`, () => {
      gt(null, 3).should.equal(false);
    });

    it(`(3,null) => true`, () => {
      gt(3, null).should.equal(true);
    });

  });

  describe(`should always treat undefined input as not comparable`, () => {

    it(`(undefined,3) => false`, () => {
      gt(undefined, 3).should.equal(false);
    });

    it(`(3,undefined) => false`, () => {
      gt(3, undefined).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`('world','hello') => true`, () => {

      const orig1: string = 'world';
      const orig2: string = 'hello';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      gt(input1, input2).should.deep.equal(true);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);

    });

  });

});
