import { should } from 'chai';
import { clone } from '../src/clone';

should();

describe(`clone.deep() - @category Object`, () => {

  describe(`should return number as is`, () => {
    it(`1 => 1`, () => {
      clone.deep(1).should.equal(1);
    });
  });

  describe(`should return clone of Number object`, () => {
    it(`Number(1) => Number(1)`, () => {
      clone.deep(new Number(1)).should.deep.equal(Number(1));
    });
  });

  describe(`should return boolean as is`, () => {
    it(`true => true`, () => {
      clone.deep(true).should.equal(true);
    });
  });

  describe(`should return clone of Boolean object`, () => {
    it(`Boolean(true) => Boolean(true)`, () => {
      clone.deep(new Boolean(true)).should.deep.equal(Boolean(true));
    });
  });

  describe(`should return string as is`, () => {
    it(`'hello' => 'hello'`, () => {
      clone.deep('hello').should.equal('hello');
    });
  });

  describe(`should return clone of String object`, () => {
    it(`String('hello') => String('hello')`, () => {
      clone.deep(new String('hello')).should.deep.equal(String('hello'));
    });
  });

  describe(`should return clone of Date object`, () => {
    it(`Date() => Date()`, () => {
      const d: Date = new Date();
      clone.deep(d).should.deep.equal(d);
    });
  });

  describe(`should return clone of RegExp`, () => {
    it(`/abc/ => /abc/`, () => {
      clone.deep(/abc/).should.deep.equal(/abc/);
    });
  });

  describe(`should return clone of ArrayBuffer`, () => {
    it(`new ArrayBuffer(8) => new ArrayBuffer(8)`, () => {
      const ab1: ArrayBuffer = new ArrayBuffer(8);
      const vi1: Int32Array = new Int32Array(ab1);
      vi1[0] = 0xFF;
      vi1[1] = 0xEE;
      const ab2: ArrayBuffer = clone.deep(ab1);
      const vi2: Int32Array = new Int32Array(ab2);
      vi1.should.deep.equal(vi2);
    });
  });

  describe(`should return clone of DataView`, () => {
    it(`new DataView() => new DataView()`, () => {
      const ab1: ArrayBuffer = new ArrayBuffer(8);
      const dv1: DataView = new DataView(ab1);
      dv1.setInt16(0, 0xFF);
      dv1.setInt16(2, 0xEE);
      const dv2: DataView = clone.deep(dv1);
      dv2.getInt16(0).should.deep.equal(0xFF);
      dv2.getInt16(2).should.deep.equal(0xEE);
    });
  });

  describe(`should return clone of Typed Array as view of ArrayBuffer`, () => {
    it(`Typed Array view => Typed Array view`, () => {
      const ab1: ArrayBuffer = new ArrayBuffer(8);
      const vi1: Int32Array = new Int32Array(ab1);
      vi1[0] = 0xFF;
      vi1[1] = 0xEE;
      const vi2: Int32Array = clone.deep(vi1);
      vi2.should.deep.equal(vi1);
    });
  });

  describe(`should return clone of Map`, () => {

    it(`new Map() => new Map()`, () => {
      const m1: Map<string, number> = new Map([['a', 1], ['b', 2], ['c', 3]]);
      clone.deep(m1).should.deep.equal(m1);
    });

    it(`new Map(Map()) => new Map(Map())`, () => {
      const m1: Map<string, number> = new Map([['a', 1], ['b', 2], ['c', 3]]);
      const m2: Map<string, Map<string, number>> = new Map([['x', m1]]);
      const m3: any = clone.deep(m2);
      const m4: any = m3.get('x');
      m4.should.deep.equal(m1);
      m4.get('a').should.equal(1);
      m4.get('b').should.equal(2);
      m4.get('c').should.equal(3);
      m3.should.deep.equal(m2);
    });

    it(`new Map(Map() Map()) => new Map(Map() Map())`, () => {
      const m1: Map<string, number>
        = new Map([['a', 1], ['b', 2], ['c', 3]]);
      const m2: Map<string, number>
        = new Map([['d', 11], ['e', 12], ['f', 13]]);
      const m3: Map<string, number>
        = new Map([['g', 21], ['h', 22], ['k', 23]]);
      m2.should.not.equal(m1);
      m3.should.not.equal(m1);
      m3.should.not.equal(m2);
      const m4: Map<string, Map<string, number>>
        = new Map([['x', m1], ['y', m2], ['z', m3]]);
      const m5: any = clone.deep(m4);
      m5.should.deep.equal(m4);
      const m6: any = m5.get('x');
      m6.should.deep.equal(m1);
      const m7: any = m5.get('y');
      m7.should.deep.equal(m2);
      const m8: any = m5.get('z');
      m8.should.deep.equal(m3);
      m8.get('g').should.equal(21);
      m8.get('h').should.equal(22);
      m8.get('k').should.equal(23);
    });

  });

  describe(`should return clone of Set`, () => {

    it(`new Set() => new Set()`, () => {
      const s1: Set<number> = new Set([1, 12, 23]);
      clone.deep(s1).should.deep.equal(s1);
    });

    it(`new Set(Set() Set()) => new Set(Set() Set())`, () => {
      const s1: Set<number> = new Set([1, 2, 3]);
      const s2: Set<number> = new Set([11, 12, 13]);
      const s3: Set<Set<number>> = new Set([s1, s2]);
      const s4: any = clone.deep(s3);
      s4.should.deep.equal(s3);
      s4.should.not.equal(s3);
    });

  });

  describe(`should return clone of array`, () => {

    it(`[1,2,3] => [1,2,3]`, () => {
      clone.deep([1, 2, 3]).should.deep.equal([1, 2, 3]);
    });

  });

  describe(`should return clone of 1 level nested array`, () => {

    it(`[1,[2,3]] => [1,[2,3]]`, () => {
      clone.deep([1, [2, 3]]).should.deep.equal([1, [2, 3]]);
    });

    it(`[1,[2],3] => [1,[2],3]`, () => {
      clone.deep([1, [2], 3]).should.deep.equal([1, [2], 3]);
    });

  });

  describe(`should return clone of deeply nested array`, () => {

    it(`[1,[2,[3,[4]]]] => [1,[2,[3,[4]]]]`, () => {
      const arr1: any[] = [1, [2, [3, [4]]]];
      const arr2: any[] = clone.deep(arr1);
      arr2.should.not.equal(arr1);
      arr2.should.deep.equal(arr1);
      arr2[1].should.not.equal(arr1[1]);
      arr2[1].should.deep.equal(arr1[1]);
      arr2[1][1].should.not.equal(arr1[1][1]);
      arr2[1][1].should.deep.equal(arr1[1][1]);
      arr2[1][1][1].should.not.equal(arr1[1][1][1]);
      arr2[1][1][1].should.deep.equal(arr1[1][1][1]);
      arr2[1][1][1][0].should.equal(arr1[1][1][1][0]);
    });

  });

  describe(`should return clone of plain object`, () => {

    it(`{a:1,b:2} => {a:1,b:2}`, () => {
      clone.deep({ a: 1, b: 2 }).should.deep.equal({ a: 1, b: 2 });
    });

  });

  describe(`should return clone of nested object`, () => {

    it(`{a:1,b:{c:2}} => {a:1,b:{c:2}}`, () => {
      clone.deep({ a: 1, b: { c: 2 } }).should.deep.equal({ a: 1, b: { c: 2 } });
    });

  });

  describe(`should handle cyclic object deep cloning`, () => {

    const a: object = { a: 1, b: { c: 'd' } };
    const b: object = clone.deep(a);

    it(`{a:1, b:{c:'d'}} => new {a:1, b:{c:'d'}}`, () => {
      b['a'].should.equal(1);
      b['b']['c'].should.deep.equal('d');
      b['b'].should.not.equal(a['b']);
      b['b'].should.deep.equal(a['b']);
    });

    a['f'] = a;
    a['g'] = a;
    const c: object = clone.deep(a);

    it(`{a:1,b:{c:'d'},f:a,g:a} => new {a:1,b:{c:'d'},f:a,g:a}`, () => {
      c['a'].should.equal(1);
      c['b']['c'].should.deep.equal('d');
      c['b'].should.not.equal(a['b']);
      c['b'].should.deep.equal(a['b']);

      c['f'].should.not.equal(a['f']);
      c['f'].should.deep.equal(a['f']);
      c['f'].should.equal(c['g']);

      c['f']['f'].should.equal(c['f']);
      c['f']['g']['f'].should.equal(c['g']);
      c['f']['g']['f']['g']['f']['g'].should.equal(c);

    });

  });

  describe(`should return {} for promise`, () => {
    it(`Promise.resolve(123) => {}`, () => {
      clone.deep(Promise.resolve(123)).should.deep.equal({});
    });
  });

  describe(`should return {} for function`, () => {
    it(`()=>123 => {}`, () => {
      clone.deep(() => 123).should.deep.equal({});
    });
  });

  describe(`should return {} for symbol`, () => {
    it(`Symbol() => {}`, () => {
      clone.deep(Symbol()).should.deep.equal({});
    });
  });

  describe(`should return NaN as NaN`, () => {
    it(`NaN => NaN`, () => {
      clone.deep(NaN).should.be.NaN;
    });
  });

  describe(`should return null as null`, () => {
    it(`null => null`, () => {
      should().equal(clone.deep(null), null);
    });
  });

  describe(`should return undefined as undefined`, () => {
    it(`undefined => undefined`, () => {
      should().equal(clone.deep(undefined), undefined);
    });
  });

  describe(`should be functional and not mutating any input`, () => {

    it(`[{a:1},{b:2}] => [{a:1}, {b:2}]`, () => {

      const orig: any = [{ a: 1 }, { b: 2 }];
      const input: any = [{ a: 1 }, { b: 2 }];
      const output: any = clone.deep([{ a: 1 }, { b: 2 }])
        .should.deep.equal([{ a: 1 }, { b: 2 }]);
      input.should.be.deep.equal(orig);
      input.should.not.be.equal(output);

    });

  });


});

