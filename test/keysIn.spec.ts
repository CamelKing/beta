import { should } from 'chai';
import { keysIn } from '../src/keysIn';

should();

describe(`keysIn() - @category Object`, () => {

  describe(`should return [] for {}`, () => {

    it(`{} => []`, () => {
      keysIn({ source: {} }).should.deep.equal([]);
    });

  });

  describe(`should return keys for normal object`, () => {

    it(`{a:1, b:2} => ['a','b']`, () => {
      keysIn({ source: { a: 1, b: 2 } }).should.deep.equal(['a', 'b']);
    });

  });

  describe(`should return keys up the prototype chain`, () => {

    it(`{a:1, b:2} => ['a','b']`, () => {
      class Foo {
        public a: number;
        constructor(x: number) {
          this.a = x;
          return this;
        }
      }
      Foo.prototype['b'] = 2;
      const foo: Foo = new Foo(1);
      keysIn({ source: foo }).should.deep.equal(['a', 'b']);
    });

  });

  describe(`should return only own keys if goDeep = false`, () => {

    it(`{a:1, b:2} => ['a','b']`, () => {
      class Foo {
        public a: number;
        constructor(x: number) {
          this.a = x;
          return this;
        }
      }
      Foo.prototype['b'] = 2;
      const foo: Foo = new Foo(1);
      keysIn({ source: foo, goDeep: false }).should.deep.equal(['a']);
    });

  });

  describe(`should return keys for array`, () => {

    it(`[1,2] => ['0','1']`, () => {
      keysIn({ source: [1, 2] }).should.deep.equal(['0', '1']);
    });

  });

  describe(`should return keys for array, incl. 'length'`, () => {

    it(`[1,2] false => ['0','1', 'length']`, () => {
      keysIn({ source: [1, 2], enumOnly: false }).should.deep.equal(['0', '1', 'length', 'should']);
      // 'should' object (non enum) was added by chai 
      // and only exist in test environment
    });

  });

  describe(`should return array-likes keys for typed array`, () => {

    it(`new Int8Array(2) => ['0','1']`, () => {
      keysIn({ source: new Int8Array(2) }).should.deep.equal(['0', '1']);
    });

    it(`new Uint16Array(3) => ['0','1','2']`, () => {
      keysIn({ source: new Uint16Array(3) }).should.deep.equal(['0', '1', '2']);
    });

    it(`new Int32Array(2) => ['0','1']`, () => {
      keysIn({ source: new Int32Array(2) }).should.deep.equal(['0', '1']);
    });

    it(`new Float64Array(3) => ['0','1','2']`, () => {
      keysIn({ source: new Float64Array(3) }).should.deep.equal(['0', '1', '2']);
    });

  });

  describe(`should return symbol keys when demanded`, () => {

    it(`{a:1, Symbol():2} => ['a', Symbol()]`, () => {
      const s: symbol = Symbol('test');
      const obj: object = { a: 1 };
      obj[s] = 2;
      keysIn({ source: obj, symbolKeys: true }).should.deep.equal(['a', s]);
    });

  });

  describe(`should return [] for ArrayBuffer`, () => {

    it(`new ArrayBuffer(2) => []`, () => {
      keysIn({ source: new ArrayBuffer(2) }).should.deep.equal([]);
    });

    it(`new ArrayBuffer(2) + init value => ['0','1']`, () => {
      const ab: ArrayBuffer = new ArrayBuffer(2);
      ab[0] = 1;
      ab[1] = 2;
      keysIn({ source: ab }).should.deep.equal(['0', '1']);
    });

  });

  describe(`should return [] for set`, () => {

    it(`new Set([1,2]) => []`, () => {
      keysIn({ source: new Set([1, 2]) }).should.deep.equal([]);
    });

  });

  describe(`should return [] for date`, () => {

    it(`new Date() => []`, () => {
      keysIn({ source: new Date() }).should.deep.equal([]);
    });

  });

  describe(`should return [] for undefined`, () => {

    it(`undefined => []`, () => {
      keysIn({ source: undefined }).should.deep.equal([]);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`{a:1, b:2} => ['a','b']`, () => {

      const orig: any = { a: 1, b: 2 };
      const input: any = Object.assign({}, orig);
      keysIn({ source: input }).should.deep.equal(['a', 'b']);
      input.should.be.deep.equal(orig);

    });

  });

});

