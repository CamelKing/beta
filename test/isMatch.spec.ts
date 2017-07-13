import { should } from 'chai';
import { isMatch } from '../src/isMatch';

should();

describe(`isMatch() - @category Language`, () => {

  describe(`should return true if object partially match source`, () => {

    it(`{a:1,b:2} {b:2} => true`, () => {
      isMatch({ a: 1, b: 2 }, { b: 2 }).should.be.true;
    });

  });

  describe(`should return true if object completely match source`, () => {

    it(`{b:2} {b:2} => true`, () => {
      isMatch({ b: 2 }, { b: 2 }).should.be.true;
    });

  });

  describe(`should not matter for the order of property in source`, () => {

    it(`{a:1, b:2, c:3} {b:2, a:1} => true`, () => {
      isMatch({ a: 1, b: 2, c: 3 }, { b: 2, a: 1 }).should.be.true;
    });

  });

  describe(`should return true if source is {}`, () => {

    it(`{b:2} {} => true`, () => {
      isMatch({ b: 2 }, {}).should.be.true;
    });

  });

  describe(`should return true if source is []`, () => {

    it(`{b:2} [] => true`, () => {
      isMatch({ b: 2 }, []).should.be.true;
    });

  });

  describe(`should return true matching {} and [], vice versa`, () => {

    it(`{} [] => true`, () => {
      isMatch({}, []).should.be.true;
    });

    it(`[] {} => true`, () => {
      isMatch([], {}).should.be.true;
    });

  });

  describe(`should return false if keys does not match`, () => {

    it(`{a:1} {b:2} => false`, () => {
      isMatch({ a: 1 }, { b: 2 }).should.be.false;
    });

  });

  describe(`should return false if key's value does not match`, () => {

    it(`{a:1} {a:2} => false`, () => {
      isMatch({ a: 1 }, { a: 2 }).should.be.false;
    });

  });

  describe(`should return false if source has more keys`, () => {

    it(`{a:1} {a:1,b:2} => false`, () => {
      isMatch({ a: 1 }, { a: 1, b: 2 }).should.be.false;
    });

  });

  describe(`should check the inherited properties`, () => {

    class Base {
      public b: number = 0;
      constructor() {
        this.b = 2;
        return this;
      }
    }

    class BasePlus extends Base {
      public a: number = 0;
      constructor() {
        super();
        this.a = 1;
        return this;
      }
    }

    it(`new BasePlus() {b:2} => true`, () => {
      isMatch(new BasePlus(), { b: 2 }).should.be.true;
    });

    it(`new BasePlus() {a:1} => true`, () => {
      isMatch(new BasePlus(), { a: 1 }).should.be.true;
    });

    it(`new BasePlus() {a:1,b:2} => true`, () => {
      isMatch(new BasePlus(), { a: 1, b: 2 }).should.be.true;
    });

    it(`new BasePlus() {a:2} => false`, () => {
      isMatch(new BasePlus(), { a: 2 }).should.be.false;
    });

    it(`new BasePlus() {b:1} => false`, () => {
      isMatch(new BasePlus(), { b: 1 }).should.be.false;
    });

    it(`new BasePlus() {a:2,b:1} => false`, () => {
      isMatch(new BasePlus(), { a: 2, b: 1 }).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`{a:1,b:2} {b:2} => true`, () => {

      const orig1: any = { a: 1, b: 2 };
      const orig2: any = { b: 2 };
      const input1: any = { a: 1, b: 2 };
      const input2: any = { b: 2 };
      isMatch(input1, input2).should.be.true;
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);

    });

  });

});

