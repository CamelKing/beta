import { should } from 'chai';
import { keysIn } from '../src/keysIn';

should();

describe(`keysIn() - @category Object`, () => {

  describe(`should return [] for {}`, () => {

    it(`{} => []`, () => {
      keysIn({}).should.deep.equal([]);
    });

  });

  describe(`should return keys for normal object`, () => {

    it(`{a:1, b:2} => ['a','b']`, () => {
      keysIn({ a: 1, b: 2 }).should.deep.equal(['a', 'b']);
    });

  });

  describe(`should return keys for array`, () => {

    it(`[1,2] => ['0','1']`, () => {
      keysIn([1, 2]).should.deep.equal(['0', '1']);
    });

  });

  describe(`should return keys for array, incl. 'length'`, () => {

    it(`[1,2] false => ['0','1']`, () => {
      keysIn([1, 2], false).should.deep.equal(['0', '1', 'length']);
    });

  });

  describe(`should return array-likes keys for typed array`, () => {

    it(`new Int8Array(2) => ['0','1']`, () => {
      keysIn(new Int8Array(2)).should.deep.equal(['0', '1']);
    });

    it(`new Uint16Array(3) => ['0','1','2']`, () => {
      keysIn(new Uint16Array(3)).should.deep.equal(['0', '1', '2']);
    });

    it(`new Int32Array(2) => ['0','1']`, () => {
      keysIn(new Int32Array(2)).should.deep.equal(['0', '1']);
    });

    it(`new Float64Array(3) => ['0','1','2']`, () => {
      keysIn(new Float64Array(3)).should.deep.equal(['0', '1', '2']);
    });

  });

  describe(`should return [] for ArrayBuffer`, () => {

    it(`new ArrayBuffer(2) => []`, () => {
      keysIn(new ArrayBuffer(2)).should.deep.equal([]);
    });

    it(`new ArrayBuffer(2) + init value => ['0','1']`, () => {
      const ab: ArrayBuffer = new ArrayBuffer(2);
      ab[0] = 1;
      ab[1] = 2;
      keysIn(ab).should.deep.equal(['0', '1']);
    });

  });

  describe(`should return [] for set`, () => {

    it(`new Set([1,2]) => []`, () => {
      keysIn(new Set([1, 2])).should.deep.equal([]);
    });

  });

  describe(`should return [] for date`, () => {

    it(`new Date() => []`, () => {
      keysIn(new Date()).should.deep.equal([]);
    });

  });

  describe(`should return [] for undefined`, () => {

    it(`undefined => []`, () => {
      keysIn(undefined).should.deep.equal([]);
    });

  });

  describe(`should return [] if no input object`, () => {

    it(` () => []`, () => {
      keysIn().should.deep.equal([]);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`{a:1, b:2} => ['a','b']`, () => {

      const orig: any = { a: 1, b: 2 };
      const input: any = Object.assign({}, orig);
      keysIn(input).should.deep.equal(['a', 'b']);
      input.should.be.deep.equal(orig);

    });

  });

});

