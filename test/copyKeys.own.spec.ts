import { should } from 'chai';
import { ObjectOptions } from '../src/constant';
import { copyKeys } from '../src/copyKeys';

should();

describe(`copyKeys.own() - @category Object`, () => {

  describe(`should copy only own properties`, () => {

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
      copyKeys.own({ source: bc, goDeep: false })
        .should.deep.equal({ x: 4, y: 5 });
    });

    it(`s:user class !goDeep => {x:1, y:3, z:6}`, () => {
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      copyKeys.own({ source: bcp, goDeep: false })
        .should.deep.equal({ x: 4, y: 5, z: 6 });
    });

    it(`s:user class !goDeep => {x:1, y:3, z:6, s:'spider'}`, () => {
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      bcp['s'] = 'spider';
      copyKeys.own({ source: bcp, goDeep: false })
        .should.deep.equal({ x: 4, y: 5, z: 6, s: 'spider' });
    });

    it(`s:user base class +prop !goDeep => {x:1, y:3, z:6}`, () => {
      Base.prototype['t'] = 'thor'
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      copyKeys.own({ source: bcp, goDeep: false })
        .should.deep.equal({ x: 4, y: 5, z: 6 });
      delete Base.prototype['t'];
    });

    it(`s:user ext class + prop !goDeep => {x:1, y:3, z:6}`, () => {
      BasePlus.prototype['s'] = 'spider'
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      copyKeys.own({ source: bcp, goDeep: false })
        .should.deep.equal({ x: 4, y: 5, z: 6 });
    });

    it(`s:user ext class + user's deep prop !goDeep => {x:1, y:3, z:6}`, () => {
      BasePlus.prototype['s'] = 'spider'
      const bcp: BasePlus = new BasePlus(4, 5, 6);
      copyKeys.own({ source: bcp, keys: ['s', 'x', 'y', 'z'], goDeep: false })
        .should.deep.equal({ x: 4, y: 5, z: 6 });
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
      copyKeys.own(inputOption)
        .should.deep.equal({ a: 1 });
      inputSource.should.be.deep.equal(origSource);
      inputTarget.should.be.deep.equal(origTarget);
      inputKeys.should.be.deep.equal(origKeys);
      inputOption.should.be.deep.equal(origOption);

    });

  });

});
