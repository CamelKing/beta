import { should } from 'chai';
import { ObjectOptions } from '../src/constant';
import { copyProperties } from '../src/copyProperties';

should();

describe(`copyProperties() - @category Object`, () => {

  describe(`should copy selected property from source to taregt`, () => {

    it(`s:{a:1,b:2}, k:['a'], t:{} => {a:1}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['a'], target: {} })
        .should.deep.equal({ a: 1 });
    });

    it(`s:{a:1,b:2}, k:['a'], t:{c:3} => {a:1,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['a'], target: { c: 3 } })
        .should.deep.equal({ a: 1, c: 3 });
    });

    it(`s:{a:1,b:2}, k:['a','b'], t:{c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['a', 'b'], target: { c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

  });

  describe(`should overwrite existing property in target if exist`, () => {

    it(`s:{a:1,b:2}, k:['a'], t:{a:3} => {a:1}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['a'], target: { a: 3 } })
        .should.deep.equal({ a: 1 });
    });

    it(`s:{a:1,b:2}, k:['a'], t:{a:3, c:3} => {a:1,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['a'], target: { a: 3, c: 3 } })
        .should.deep.equal({ a: 1, c: 3 });
    });

  });

  describe(`should not overwrite existing property if source value is nil`, () => {

    it(`s:{a:undefined,b:2}, k:['a'], t:{a:1} => {a:1}`, () => {
      copyProperties({ source: { a: undefined, b: 2 }, keys: ['a'], target: { a: 1 } })
        .should.deep.equal({ a: 1 });
    });

    it(`s:{a:null,b:2}, k:['a'], t:{a:1, c:3} => {a:1,c:3}`, () => {
      copyProperties({ source: { a: null, b: 2 }, keys: ['a'], target: { a: 1, c: 3 } })
        .should.deep.equal({ a: 1, c: 3 });
    });

  });

  describe(`should create if new property (even if null/undefined)`, () => {

    it(`s:{z:undefined,b:2}, k:['z'], t:{a:1} => {a:1,z:undefined}`, () => {
      copyProperties({ source: { z: undefined, b: 2 }, keys: ['z'], target: { a: 1 } })
        .should.deep.equal({ a: 1, z: undefined });
    });

    it(`s:{z:null,b:2}, k:['z'], t:{a:1, c:3} => {z:null,a:1,c:3}`, () => {
      copyProperties({ source: { z: null, b: 2 }, keys: ['z'], target: { a: 1, c: 3 } })
        .should.deep.equal({ a: 1, c: 3, z: null });
    });

  });

  describe(`should copy the same using keys string instead of array`, () => {

    it(`s:{a:1,b:2}, k:'a', t:{} => {a:1}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: 'a', target: {} })
        .should.deep.equal({ a: 1 });
    });

    it(`s:{a:1,b:2}, k:'a', t:{c:3} => {a:1,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: 'a', target: { c: 3 } })
        .should.deep.equal({ a: 1, c: 3 });
    });

    it(`s:{a:1,b:2}, k:'a,b', t:{c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: 'a,b', target: { c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

  });

  describe(`should copy all properties if keys string is '*'`, () => {

    it(`s:{a:1,b:2}, k:'*', t:{c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: '*', target: { c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

    it(`s:{a:1,b:2}, k:'*', t:{a:3, c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: '*', target: { a: 3, c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

  });

  describe(`should copy all properties if keys string contains '*'`, () => {

    it(`s:{a:1,b:2}, k:'a,*', t:{c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: 'a,*', target: { c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

    it(`s:{a:1,b:2}, k:'b,*', t:{a:3, c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: 'b,*', target: { a: 3, c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

    it(`s:{a:1,b:2}, k:'b,c*', t:{a:3, c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: 'b,c*', target: { a: 3, c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

  });

  describe(`should copy all properties if keys array is ['*']`, () => {

    it(`s:{a:1,b:2}, k:['*'], t:{c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['*'], target: { c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

    it(`s:{a:1,b:2}, k:['*'], t:{a:3, c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['*'], target: { a: 3, c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

  });

  describe(`should copy all properties if keys array contains '*'`, () => {

    it(`s:{a:1,b:2}, k:['a','*'], t:{c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['a', '*'], target: { c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

    it(`s:{a:1,b:2}, k:['b','*'], t:{a:3, c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['b', '*'], target: { a: 3, c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

    it(`s:{a:1,b:2}, k:['b','c*'], t:{a:3, c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['b', 'c*'], target: { a: 3, c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

  });

  describe(`should copy no properties if keys array is empty`, () => {

    it(`s:{a:1,b:2}, k:[], t:{c:3} => {c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: [], target: { c: 3 } })
        .should.deep.equal({ c: 3 });
    });

    it(`s:{a:1,b:2}, k:[], t:{a:3, c:3} => {a:3,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: [], target: { a: 3, c: 3 } })
        .should.deep.equal({ a: 3, c: 3 });
    });

  });

  describe(`should copy the same ignoring lead/trail spaces in keys param`, () => {

    it(`s:{a:1,b:2}, k:' a', t:{} => {a:1}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ' a', target: {} })
        .should.deep.equal({ a: 1 });
    });

    it(`s:{a:1,b:2}, k:'a ', t:{c:3} => {a:1,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: 'a ', target: { c: 3 } })
        .should.deep.equal({ a: 1, c: 3 });
    });

    it(`s:{a:1,b:2}, k:'  a  ,  b  ', t:{c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: '  a  ,  b  ', target: { c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

    it(`s:{a:1,b:2}, k:[' a'], t:{} => {a:1}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: [' a'], target: {} })
        .should.deep.equal({ a: 1 });
    });

    it(`s:{a:1,b:2}, k:['a '], t:{c:3} => {a:1,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['a '], target: { c: 3 } })
        .should.deep.equal({ a: 1, c: 3 });
    });

    it(`s:{a:1,b:2}, k:['  a  ','  b  '], t:{c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['  a  ', '  b  '], target: { c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

  });

  describe(`should copy the same non-existing key(s) in keys param`, () => {

    it(`s:{a:1,b:2}, k:'x', t:{} => {}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: 'x', target: {} })
        .should.deep.equal({});
    });

    it(`s:{a:1,b:2}, k:'x', t:{c:3} => {a:1,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: 'x', target: { c: 3 } })
        .should.deep.equal({ c: 3 });
    });

    it(`s:{a:1,b:2}, k:'x', t:{b:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: 'x', target: { b: 3 } })
        .should.deep.equal({ b: 3 });
    });

  });

  describe(`should copy all properties if keys param is omitted`, () => {

    it(`s:{a:1,b:2}, t:{c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, target: { c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

    it(`s:{a:1,b:2}, t:{a:3, c:3} => {a:1,b:2,c:3}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, target: { a: 3, c: 3 } })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

  });

  describe(`should treat target as {} if omitted`, () => {

    it(`s:{a:1,b:2}, k:['a'] => {a:1}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['a'] })
        .should.deep.equal({ a: 1 });
    });

    it(`s:{a:1,b:2}, k:['a'] t:{} => {a:1}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['a'], target: {} })
        .should.deep.equal({ a: 1 });
    });

    it(`s:{a:1,b:2}, k:['a'] t:undefined => {a:1}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['a'], target: undefined })
        .should.deep.equal({ a: 1 });
    });

    it(`s:{a:1,b:2}, k:['a','b'] => {a:1,b:2}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['a', 'b'] })
        .should.deep.equal({ a: 1, b: 2 });
    });

  });

  describe(`should copy all keys if no intended keys array`, () => {

    it(`s:{a:1,b:2} => {a:1, b:2}`, () => {
      copyProperties({ source: { a: 1, b: 2 } })
        .should.deep.equal({ a: 1, b: 2 });
    });

    it(`s:{a:1,b:2} k:undefined => {a:1, b:2}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: undefined })
        .should.deep.equal({ a: 1, b: 2 });
    });

  });

  describe(`should copy whole source if keys is ['*'] and no target`, () => {

    it(`s:{a:1,b:2} k:['*'] => {a:1, b:2}`, () => {
      copyProperties({ source: { a: 1, b: 2 }, keys: ['*'] })
        .should.deep.equal({ a: 1, b: 2 });
    });

  });

  describe(`should copy all keys in nested objects`, () => {

    const x: object = { a: 1 };
    const y: object = { c: 3, x: x };

    it(`s:{a:1} t:{c:3, x:x} => {a:1, c:3, x:{a:1}}`, () => {
      copyProperties({ source: x, target: y })
        .should.deep.equal({ a: 1, c: 3, x: { a: 1 } });
      console.log(copyProperties({ source: x, target: y }));
    });

    it(`s:{c:3, x:x} t:{a:1} => {a:1, c:3, x:{a:1}}`, () => {
      copyProperties({ source: y, target: x })
        .should.deep.equal({ a: 1, c: 3, x: { a: 1 } });
      console.log(copyProperties({ source: y, target: x }));

    });

  });

  describe(`should copy nested objects as reference`, () => {

    const x: object = { a: 1 };
    const y: object = { c: 3, x: x };

    it(`s:{a:1} t:{c:3, x:x} => {a:1, c:3, x:{a:1}}`, () => {
      const z: object = copyProperties({ source: x, target: y });
      z.should.deep.equal({ a: 1, c: 3, x: { a: 1 } });
      z['x'].should.equal(x);
    });

    it(`s:{c:3, x:x} t:{a:1} => {a:1, c:3, x:{a:1}}`, () => {
      const z: object = copyProperties({ target: x, source: y });
      z.should.deep.equal({ a: 1, c: 3, x: { a: 1 } });
      z['x'].should.equal(x);
    });

  });

  describe(`should copy user class/extended/prototypical objects`, () => {

    class Base {
      public x: number = 0;
      public y: number = 0;
      constructor(a?: number, b?: number) {
        if (a) this.x = a;
        if (b) this.y = b;
        return this;
      }
    }

    class BasePlus extends Base {
      public z: number = 0;
      constructor(a?: number, b?: number, c?: number) {
        super(a, b);
        if (c) this.z = c;
        return this;
      }

      public get w(): number {
        return 99;
      }

    }

    it(`s:user class => {x:1, y:3}`, () => {
      const bc: Base = new Base(4, 5);
      copyProperties({ source: bc })
        .should.deep.equal({ x: 4, y: 5 });
    });

    it(`s:user class => {x:1, y:3, z:6}`, () => {
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      copyProperties({ source: bcp })
        .should.deep.equal({ x: 4, y: 5, z: 6 });
    });

    it(`s:user class => {x:1, y:3, z:6, s:'spider'}`, () => {
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      bcp['s'] = 'spider';
      copyProperties({ source: bcp })
        .should.deep.equal({ x: 4, y: 5, z: 6, s: 'spider' });
    });

    it(`s:user base class +prop => {x:1, y:3, z:6, t:'thor'}`, () => {
      Base.prototype['t'] = 'thor'
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      copyProperties({ source: bcp })
        .should.deep.equal({ x: 4, y: 5, z: 6, t: 'thor' });
      delete Base.prototype['t'];
    });

    it(`s:user ext class + prop => {x:1, y:3, z:6, s:'spider'}`, () => {
      BasePlus.prototype['s'] = 'spider'
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      copyProperties({ source: bcp })
        .should.deep.equal({ x: 4, y: 5, z: 6, s: 'spider' });
    });

  });

  describe(`should copy without prototype property if goDeep=false`, () => {

    class Base {
      public x: number = 0;
      public y: number = 0;
      constructor(a?: number, b?: number) {
        if (a) this.x = a;
        if (b) this.y = b;
        return this;
      }
    }

    class BasePlus extends Base {
      public z: number = 0;
      constructor(a?: number, b?: number, c?: number) {
        super(a, b);
        if (c) this.z = c;
        return this;
      }

      public get w(): number {
        return 99;
      }

    }

    it(`s:user class !goDeep => {x:1, y:3}`, () => {
      const bc: Base = new Base(4, 5);
      copyProperties({ source: bc, goDeep: false })
        .should.deep.equal({ x: 4, y: 5 });
    });

    it(`s:user class !goDeep => {x:1, y:3, z:6}`, () => {
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      copyProperties({ source: bcp, goDeep: false })
        .should.deep.equal({ x: 4, y: 5, z: 6 });
    });

    it(`s:user class !goDeep => {x:1, y:3, z:6, s:'spider'}`, () => {
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      bcp['s'] = 'spider';
      copyProperties({ source: bcp, goDeep: false })
        .should.deep.equal({ x: 4, y: 5, z: 6, s: 'spider' });
    });

    it(`s:user base class +prop !goDeep => {x:1, y:3, z:6}`, () => {
      Base.prototype['t'] = 'thor'
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      copyProperties({ source: bcp, goDeep: false })
        .should.deep.equal({ x: 4, y: 5, z: 6 });
      delete Base.prototype['t'];
    });

    it(`s:user ext class + prop !goDeep => {x:1, y:3, z:6}`, () => {
      BasePlus.prototype['s'] = 'spider'
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      copyProperties({ source: bcp, goDeep: false })
        .should.deep.equal({ x: 4, y: 5, z: 6 });
    });

  });

  describe(`should copy all keys including circular reference in objects`, () => {

    const x: object = { a: 1 };
    const y: object = { c: 3 };
    y['x'] = x;
    x['y'] = y;

    it(`s:{a:1} t:{c:3, x:x} => {a:1, c:3, x:{a: 1, y:y}, y:{c:3, x:{a:1, y:y}}`, () => {
      const z: object = copyProperties({ source: x, target: y });

      z.should.deep.equal({ a: 1, c: 3, x: { a: 1, y: y }, y: { c: 3, x: { a: 1, y: y } } });

      z['x']['y'].should.equal(y);
      z['y']['x'].should.equal(x);

    });

    it(`s:{c:3, x:x} t:{a:1}  => {a:1, c:3, x:{a: 1, y:y}, y:{c:3, x:{a:1, y:y}}`, () => {
      const z: object = copyProperties({ source: y, target: x });

      z.should.deep.equal({ a: 1, c: 3, x: { a: 1, y: y }, y: { c: 3, x: { a: 1, y: y } } });

      z['x']['y'].should.equal(y);
      z['y']['x'].should.equal(x);

    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`(s:{a:1, b:2}, k:['a'], t:{}) => {a:1}`, () => {

      const origSource: any = { a: 1, b: 2 };
      const origTarget: any = {};
      const origKeys: any[] = ['a'];
      const inputSource: any = { ...origSource };
      const inputTarget: any = { ...origTarget };
      const inputKeys: any[] = [...origKeys];
      const origOption: ObjectOptions = { source: origSource, target: origTarget, keys: origKeys };
      const inputOption: ObjectOptions = { source: inputSource, target: inputTarget, keys: inputKeys };
      copyProperties(inputOption)
        .should.deep.equal({ a: 1 });
      inputSource.should.be.deep.equal(origSource);
      inputTarget.should.be.deep.equal(origTarget);
      inputKeys.should.be.deep.equal(origKeys);
      inputOption.should.be.deep.equal(origOption);

    });

  });

});
