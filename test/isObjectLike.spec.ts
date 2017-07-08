import { should } from 'chai';
import { isObjectLike } from '../src/isObjectLike';

should();

describe(`isObjectLike() - @category Language`, () => {

  describe(`should return true for object-like values`, () => {

    it(`{} => true`, () => {
      isObjectLike({}).should.equal(true);
    });

    it(`{a:1} => true`, () => {
      isObjectLike({ a: 1 }).should.equal(true);
    });

    it(`[1,2,3] => true`, () => {
      isObjectLike([1, 2, 3]).should.equal(true);
    });

    it(`new Date() => true`, () => {
      isObjectLike(new Date()).should.equal(true);
    });

  });

  describe(`should return false for non object-like values`, () => {

    it(`Date.now() => false`, () => {
      isObjectLike(Date.now()).should.equal(false);
    });

    it(`123 => false`, () => {
      isObjectLike(123).should.equal(false);
    });

    it(`true => false`, () => {
      isObjectLike(true).should.equal(false);
    });

    it(`'hello' => false`, () => {
      isObjectLike('hello').should.equal(false);
    });

  });

  describe(`should return false for null/undefined/NaN`, () => {

    it(`null => false`, () => {
      isObjectLike(null).should.equal(false);
    });

    it(`undefined => false`, () => {
      isObjectLike(undefined).should.equal(false);
    });

    it(`NaN => false`, () => {
      isObjectLike(NaN).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`{a:1} => true`, () => {

      const orig: any = { a: 1 };
      const input: any = Object(orig);
      isObjectLike(input).should.equal(true);
      input.should.be.deep.equal(orig);

    });

  });

});
