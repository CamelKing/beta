import { should } from 'chai';
import { isObjectLike } from '../src/isObjectLike';

should();

describe(`isObjectLike() - @category Language`, () => {

  describe(`should return true for object-like values`, () => {

    it(`{} => true`, () => {
      isObjectLike({}).should.be.true;
    });

    it(`{a:1} => true`, () => {
      isObjectLike({ a: 1 }).should.be.true;
    });

    it(`[1,2,3] => true`, () => {
      isObjectLike([1, 2, 3]).should.be.true;
    });

    it(`new Date() => true`, () => {
      isObjectLike(new Date()).should.be.true;
    });

  });

  describe(`should return false for non object-like values`, () => {

    it(`Date.now() => false`, () => {
      isObjectLike(Date.now()).should.be.false;
    });

    it(`123 => false`, () => {
      isObjectLike(123).should.be.false;
    });

    it(`true => false`, () => {
      isObjectLike(true).should.be.false;
    });

    it(`'hello' => false`, () => {
      isObjectLike('hello').should.be.false;
    });

  });

  describe(`should return false for null/undefined/NaN`, () => {

    it(`null => false`, () => {
      isObjectLike(null).should.be.false;
    });

    it(`undefined => false`, () => {
      isObjectLike(undefined).should.be.false;
    });

    it(`NaN => false`, () => {
      isObjectLike(NaN).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`{a:1} => true`, () => {

      const orig: any = { a: 1 };
      const input: any = Object(orig);
      isObjectLike(input).should.be.true;
      input.should.be.deep.equal(orig);

    });

  });

});
