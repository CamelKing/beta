import { should } from 'chai';
import { isEqual } from '../src/isEqual';

should();

describe(`isEqual() - @category Language`, () => {

  describe(`should return false if comparing different types`, () => {

    it(`(1,'hello') => false`, () => {
      isEqual(1, 'hello').should.equal(false);
    });

    it(`(true,'hello') => false`, () => {
      isEqual(true, 'hello').should.equal(false);
    });

    it(`(true,1) => false`, () => {
      isEqual(true, 1).should.equal(false);
    });

    it(`([1],{1:1}) => false`, () => {
      isEqual([1], { 1: 1 }).should.equal(false);
    });


  });

  describe(`should return true if two primitives with same value`, () => {

    it(`(1,1) => true`, () => {
      isEqual(1, 1).should.equal(true);
    });

    it(`(1,1.0) => true`, () => {
      isEqual(1, 1.0).should.equal(true);
    });

    it(`(+0,-0) => true`, () => {
      isEqual(+0, -0).should.equal(true);
    });

    it(`('hello','hello') => true`, () => {
      isEqual('hello', 'hello').should.equal(true);
    });

    it(`(true,true) => true`, () => {
      isEqual(true, true).should.equal(true);
    });

  });

  describe(`should return false if two primitives with diff value`, () => {

    it(`(1,1.2) => false`, () => {
      isEqual(1, 1.2).should.equal(false);
    });

    it(`(1,2) => false`, () => {
      isEqual(1, 2).should.equal(false);
    });

    it(`('hello','HELLO') => false`, () => {
      isEqual('hello', 'HELLO').should.equal(false);
    });

    it(`('hello','') => false`, () => {
      isEqual('hello', '').should.equal(false);
    });

    it(`(true,false) => false`, () => {
      isEqual(true, false).should.equal(false);
    });

  });

  describe(`should return true if objectified primitives with same value`, () => {

    it(`(Object(1),Object(1) => true`, () => {
      isEqual(Object(1), Object(1)).should.equal(true);
    });

    it(`(Object(1),Object(1.0)) => true`, () => {
      isEqual(Object(1), Object(1.0)).should.equal(true);
    });

    it(`(Object('hello'),Object('hello')) => true`, () => {
      isEqual(Object('hello'), Object('hello')).should.equal(true);
    });

    it(`(Object(true),Object(true)) => true`, () => {
      isEqual(Object(true), Object(true)).should.equal(true);
    });

  });

  describe(`should return false if objectified primitives with diff value`, () => {

    it(`(Object(1),Object(1.2)) => false`, () => {
      isEqual(Object(1), Object(1.2)).should.equal(false);
    });

    it(`(Object(1),Object(2) => false`, () => {
      isEqual(Object(1), Object(2)).should.equal(false);
    });

    it(`(Object('hello'),Object('HELLO')) => false`, () => {
      isEqual(Object('hello'), Object('HELLO')).should.equal(false);
    });

    it(`(Object('hello'),Object('')) => false`, () => {
      isEqual(Object('hello'), Object('')).should.equal(false);
    });

    it(`(Object(true),Object(false)) => false`, () => {
      isEqual(Object(true), Object(false)).should.equal(false);
    });

  });

  describe(`should return false comparing numbers to NaN`, () => {

    it(`NaN 1 => false`, () => {
      isEqual(NaN, 1).should.equal(false);
    });

  });

  describe(`should return true if 2 sets have the same elements`, () => {

    it(`{1,2,3} {1,2,3} => true`, () => {
      isEqual(new Set([1, 2, 3]), new Set([1, 2, 3])).should.equal(true);
    });

    it(`{1,2,3} {2,3,1} => true`, () => {
      isEqual(new Set([1, 2, 3]), new Set([2, 3, 1])).should.equal(true);
    });

    it(`{} {} => true`, () => {
      isEqual(new Set([]), new Set([])).should.equal(true);
    });

    it(`{{a:1}} {{a:1}} => true`, () => {
      isEqual(new Set([{ a: 1 }]), new Set([{ a: 1 }])).should.equal(true);
    });

  });

  describe(`should returnfalse if 2 sets do not have the same elements`, () => {

    it(`{1} {1,2} => false`, () => {
      isEqual(new Set([1]), new Set([1, 2])).should.equal(false);
    });

    it(`{1,3} {1,2} => false`, () => {
      isEqual(new Set([1, 3]), new Set([1, 2])).should.equal(false);
    });

    it(`{{a:1}} {{a:2}} => true`, () => {
      isEqual(new Set([{ a: 1 }]), new Set([{ a: 2 }])).should.equal(false);
    });

  });

  describe(`should return true if same contents (nested) arrays`, () => {

    it(`[1,2,3] [1,2,3] => true`, () => {
      isEqual([1, 2, 3], [1, 2, 3]).should.equal(true);
    });

    it(`[1,2,3] [2,3,1] => false`, () => {
      isEqual([1, 2, 3], [2, 3, 1]).should.equal(false);
    });

    it(`[] [] => true`, () => {
      isEqual([], []).should.equal(true);
    });

    it(`[1,[2,3]] [1,[2,3]] => true`, () => {
      isEqual([1, [2, 3]], [1, [2, 3]]).should.equal(true);
    });

  });

  describe(`should return false if not same contents (nested) arrays`, () => {

    it(`[1] [1,2] => false`, () => {
      isEqual([1], [1, 2]).should.equal(false);
    });

    it(`[1,3] [1,2] => false`, () => {
      isEqual([1, 3], [1, 2]).should.equal(false);
    });

    it(`[{a:1}] [{a:1}] => true`, () => {
      isEqual([{ a: 1 }], [{ a: 1 }]).should.equal(true);
    });

    it(`[1,[2,3]] [1,[2,4]] => false`, () => {
      isEqual([1, [2, 3]], [1, [2, 4]]).should.equal(false);
    });

  });

  describe(`should return true for 2 objects with same key:values`, () => {

    it(`{} {} => true`, () => {
      isEqual({}, {}).should.equal(true);
    });

    it(`{a:1, b:2} {a:1, b:2} => true`, () => {
      isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }).should.equal(true);
    });

  });

  describe(`should return false for 2 objects with different key:values`, () => {

    it(`{a:1, b:3} {a:1, b:2} => false`, () => {
      isEqual({ a: 1, b: 3 }, { a: 1, b: 2 }).should.equal(false);
    });

    it(`{a:1, c:3} {a:1, b:2} => false`, () => {
      isEqual({ a: 1, c: 3 }, { a: 1, b: 2 }).should.equal(false);
    });

    it(`{a:1, b:2, c:3} {a:1, b:2} => false`, () => {
      isEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }).should.equal(false);
    });

  });

  describe(`should return true for date objects with same time`, () => {

    it(`date() date() => true`, () => {
      const dt: Date = new Date();
      isEqual(new Date(dt), new Date(dt)).should.equal(true);
    });

  });

  describe(`should return false for date objects with different time`, () => {

    it(`date() date\'() => false`, () => {
      const dt: Date = new Date();
      isEqual(new Date(dt), new Date(dt.getTime() + 1000)).should.equal(false);
    });

  });

  describe(`should return true for same reference (func,prom,sym)`, () => {

    it(`symbol() symbol() => true`, () => {
      const sm: symbol = Symbol();
      isEqual(sm, sm).should.equal(true);
    });

    it(`fn1() fn1() => true`, () => {
      const fn: () => number = () => 123;
      isEqual(fn, fn).should.equal(true);
    });

    it(`pm1() pm1() => true`, () => {
      const pm: Promise<number> = Promise.resolve(123);
      isEqual(pm, pm).should.equal(true);
    });

  });

  describe(`should return false for different reference (func,prom,sym)`, () => {

    it(`symbol() symbol\'() => false`, () => {
      isEqual(Symbol(), Symbol()).should.equal(false);
    });

    it(`fn1() fn1\'() => false`, () => {
      isEqual(() => 123, () => 123).should.equal(false);
    });

    it(`pm1() pm1\'() => false`, () => {
      isEqual(Promise.resolve(123), Promise.resolve(123)).should.equal(false);
    });

  });

  describe(`should return true for pairs of null/undefined/NaN`, () => {

    it(`null null => true`, () => {
      isEqual(null, null).should.equal(true);
    });

    it(`undefined undefined => true`, () => {
      isEqual(undefined, undefined).should.equal(true);
    });

    it(`NaN NaN => true`, () => {
      isEqual(NaN, NaN).should.equal(true);
    });

  });

  describe(`should return false for cross compare of null/undefined/NaN`, () => {

    it(`null undefined => false`, () => {
      isEqual(null, undefined).should.equal(false);
    });

    it(`null NaN => false`, () => {
      isEqual(null, NaN).should.equal(false);
    });

    it(`undefined NaN => false`, () => {
      isEqual(undefined, NaN).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`('hello','hello') => true`, () => {

      const orig1: any = 'hello';
      const orig2: any = 'hello';
      const input1: any = orig1.slice(0);
      const input2: any = orig2.slice(0);
      isEqual(input1, input2).should.equal(true);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);

    });

  });

  // tslint:disable-next-line:max-file-line-count
});
