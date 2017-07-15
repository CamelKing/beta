import { should } from 'chai';
import { conformsTo } from '../src/conformsTo';

should();

describe(`conformsTo() - @category Language`, () => {

  describe(`should return true if the predicate object is {}`, () => {

    it(`{a:1,b:2} {} => true`, () => {
      conformsTo({ a: 1, b: 2 }, {}).should.be.true;
    });

  });

  describe(`should return true if input/predicate both {}`, () => {

    it(`{} {} => true`, () => {
      conformsTo({}, {}).should.be.true;
    });

  });

  describe(`should return false if the property to test does not exist`, () => {

    it(`{a:1} {b:(n)=>n>1} => false`, () => {
      conformsTo({ a: 1 }, { b: (n: number) => n > 1 }).should.be.false;
    });

  });

  describe(`should return true if the predicate return true`, () => {

    it(`{a:1,b:2} {b:(n)=>n>1} => true`, () => {
      conformsTo({ a: 1, b: 2 }, { b: (n: number) => n > 1 }).should.be.true;
    });

  });

  describe(`should return false if the predicate return false`, () => {

    it(`{a:1,b:2} {b:(n)=>n>2} => true`, () => {
      conformsTo({ a: 1, b: 2 }, { b: (n: number) => n > 2 }).should.be.false;
    });

  });

  describe(`should return true if multiple predicates return true`, () => {

    it(`{a:1,b:2} {a:(n)=>n>0,b:(n)=>n>=2} => true`, () => {
      conformsTo({ a: 1, b: 2 },
        { a: (n: number) => n > 0, b: (n: number) => n >= 2 }).should.be.true;
    });

  });

  describe(`should return false if not all predicates return true`, () => {

    it(`{a:1,b:2} {a:(n)=>n>1,b:(n)=>n>=2} => true`, () => {
      conformsTo({ a: 1, b: 2 },
        { a: (n: number) => n > 1, b: (n: number) => n >= 2 }).should.be.false;
    });

  });

  describe(`should return true if the fixed value predicate is true`, () => {

    it(`{a:1,b:2} {b:2} => true`, () => {
      conformsTo({ a: 1, b: 2 }, { b: 2 }).should.be.true;
    });

  });

  describe(`should return false if the fixed value predicate is false`, () => {

    it(`{a:1,b:2} {b:3} => true`, () => {
      conformsTo({ a: 1, b: 2 }, { b: 3 }).should.be.false;
    });

  });

  describe(`should return true if applying predicate(true) to Array`, () => {

    it(`[1,2] {'1':(n)=>n>1} => true`, () => {
      conformsTo([1, 2], { '1': (n: number) => n > 1 }).should.be.true;
    });

  });

  describe(`should return false if applying predicate(false) to Array`, () => {

    it(`[1,2] {'1':(n)=>n>2} => true`, () => {
      conformsTo([1, 2], { '1': (n: number) => n > 2 }).should.be.false;
    });

  });

  describe(`should return true if applying fix predicate(true) to Array`, () => {

    it(`[1,2] {'1':2} => true`, () => {
      conformsTo([1, 2], { '1': 2 }).should.be.true;
    });

  });

  describe(`should return false if applying fix predicate(false) to Array`, () => {

    it(`[1,2] {'1':3} => true`, () => {
      conformsTo([1, 2], { '1': 3 }).should.be.false;
    });

  });

  describe(`should return true if applying {} predicate to Array`, () => {

    it(`[1,2] {} => true`, () => {
      conformsTo([1, 2], {}).should.be.true;
    });

  });

  describe(`should return true if applying {} predicate to empty Array`, () => {

    it(`[] {} => true`, () => {
      conformsTo([], {}).should.be.true;
    });

  });

  describe(`should return false if applying predicate to empty Array`, () => {

    it(`[] {'1':1} => false`, () => {
      conformsTo([], { '1': 1 }).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`{a:1,b:2} {b:(n)=>n>1} => true`, () => {

      const orig: any = { a: 1, b: 2 };
      const input: any = { a: 1, b: 2 };
      const conf: any = { b: (n: number) => n > 1 }
      conformsTo(input, conf).should.be.true;
      input.should.be.deep.equal(orig);

    });

  });

});

