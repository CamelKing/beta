import { should } from 'chai';
import { toPlainObject } from '../src/toPlainObject';

should();

describe(`toPlainObject() - @category Language`, () => {

  describe(`should flatten all string keys from input object`, () => {

    it(`{b:2}->{a:1} => {a:1,b:2}`, () => {

      class Base {
        public b: number;
        constructor() {
          this.b = 2;
          return this;
        }
      }

      class BasePlus extends Base {
        public a: number;
        constructor() {
          super();
          this.a = 1;
          return this;
        }
      }

      toPlainObject(new BasePlus()).should.deep.equal({ a: 1, b: 2 });

    });

  });

  describe(`should not copy symbols keys`, () => {

    it(`{b:2}->{a:1} => {a:1,b:2}`, () => {

      class Base {
        public b: number;
        constructor() {
          this.b = 2;
          return this;
        }
      }

      Base.prototype[Symbol()] = 199;

      class BasePlus extends Base {
        public a: number;
        constructor() {
          super();
          this.a = 1;
          return this;
        }
      }

      BasePlus.prototype[Symbol()] = 299;

      toPlainObject(new BasePlus()).should.deep.equal({ a: 1, b: 2 });

    });

  });

  describe(`should not copy enum keys`, () => {

    it(`[1,2,3] => {'0':1,'1':2,'2':3}`, () => {
      toPlainObject([1, 2, 3]).should.deep.equal({ '0': 1, '1': 2, '2': 3 });
    });

  });

  describe(`should return {} for {}`, () => {

    it(`{} => {}`, () => {
      toPlainObject({}).should.deep.equal({});
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`{b:2} + proto {c:3} => {a:2,c:3}`, () => {

      class Foo {
        public b: number;
        constructor() {
          this.b = 2;
          return this;
        }
      }

      Foo.prototype['c'] = 3;

      const orig: any = new Foo();
      const input: any = new Foo();
      toPlainObject(input).should.deep.equal({ b: 2, c: 3 });
      input.should.be.deep.equal(orig);

    });

  });

});

