import { should } from 'chai';
import { assign } from '../src/assign';

should();

describe(`assign.to() - @category object`, () => {

  describe(`should copy enum prop names from right to left`, () => {

    it(`{a:1,b:2} {c:3,d:4} => {a:1,b:2,c:3,d:4}`, () => {
      assign.to({ a: 1, b: 2 }, { c: 3, d: 4 })
        .should.deep.equal({ a: 1, b: 2, c: 3, d: 4 });
    });

  });

  describe(`should copy enum prop names from right to {}`, () => {

    it(`{} {c:3,d:4} => {c:3,d:4}`, () => {
      assign.to({}, { c: 3, d: 4 }).should.deep.equal({ c: 3, d: 4 });
    });

  });

  describe(`should return {} if only {} is passed in`, () => {

    it(`{} => {}`, () => {
      assign.to({}).should.deep.equal({});
    });

  });

  describe(`should copy enum prop names from multiple source objects`, () => {

    it(`{a:1,b:2} {c:3,d:4} {e:5,f:6} => {a:1,b:2,c:3,d:4,e:5,f:6}`, () => {
      assign.to({ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 })
        .should.deep.equal({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 });
    });

  });

  describe(`should ignore {} in the sources list`, () => {

    it(`{a:1} {b:2} {} {c:3} => {a:1,b:2,c:3}`, () => {
      assign.to({ a: 1 }, { b: 2 }, {}, { c: 3 })
        .should.deep.equal({ a: 1, b: 2, c: 3 });
    });

  });

  describe(`should return target as is if source is {}`, () => {

    it(`{} {} => {}`, () => {
      assign.to({}, {}).should.deep.equal({});
    });

    it(`{a:1,b:2} {} => {a:1,b:2}`, () => {
      assign.to({ a: 1, b: 2 }, {}).should.deep.equal({ a: 1, b: 2 });
    });

  });

  describe(`should copy ignoring empty source(s)`, () => {

    it(`{a:1,b:2} {} {c:3,d:4} => {a:1,b:2,c:3,d:4}`, () => {
      assign.to({ a: 1, b: 2 }, {}, { c: 3, d: 4 })
        .should.deep.equal({ a: 1, b: 2, c: 3, d: 4 });
    });

    it(`{a:1,b:2} {} {} {c:3,d:4} => {a:1,b:2,c:3,d:4}`, () => {
      assign.to({ a: 1, b: 2 }, {}, {}, { c: 3, d: 4 })
        .should.deep.equal({ a: 1, b: 2, c: 3, d: 4 });
    });

    it(`{a:1,b:2} {} {c:3,d:4} {} => {a:1,b:2,c:3,d:4}`, () => {
      assign.to({ a: 1, b: 2 }, {}, { c: 3, d: 4 }, {})
        .should.deep.equal({ a: 1, b: 2, c: 3, d: 4 });
    });

    it(`{a:1,b:2} {c:3,d:4} {} => {a:1,b:2,c:3,d:4}`, () => {
      assign.to({ a: 1, b: 2 }, { c: 3, d: 4 }, {})
        .should.deep.equal({ a: 1, b: 2, c: 3, d: 4 });
    });

  });

  describe(`should overwrite property from left to right`, () => {

    it(`{a:1,b:2} {a:3,d:4} => {a:3,b:2,d:4}`, () => {
      assign.to({ a: 1, b: 2 }, { a: 3, d: 4 })
        .should.deep.equal({ a: 3, b: 2, d: 4 });
    });

    it(`{a:1,b:2} {a:3,d:4} {a:5, f:6} => {a:5,b:2,d:4,f:6}`, () => {
      assign.to({ a: 1, b: 2 }, { a: 3, d: 4 }, { a: 5, f: 6 })
        .should.deep.equal({ a: 5, b: 2, d: 4, f: 6 });
    });

  });

  describe(`should copy nothing from Error object`, () => {

    it(`{} Error() => {}`, () => {
      assign.to({}, new Error('error msg')).should.deep.equal({});
    });

    it(`{a:1,b:2} Error() => {a:1,b:2}`, () => {
      assign.to({ a: 1, b: 2 }, new Error('error msg'))
        .should.deep.equal({ a: 1, b: 2 });
    });

  });

  describe(`should copy nothing from Date object`, () => {

    it(`{} new Date() => {}`, () => {
      assign.to({}, new Date()).should.deep.equal({});
    });

    it(`{a:1,b:2} new Date() => {a:1,b:2}`, () => {
      assign.to({ a: 1, b: 2 }, new Date())
        .should.deep.equal({ a: 1, b: 2 });
    });

  });

  describe(`should copy nothing from function object`, () => {

    it(`{} Math.abs => {}`, () => {
      assign.to({}, Math.abs).should.deep.equal({});
    });

    it(`{a:1,b:2} Math.abs => {a:1,b:2}`, () => {
      assign.to({ a: 1, b: 2 }, Math.abs)
        .should.deep.equal({ a: 1, b: 2 });
    });

  });

  describe(`should copy keys from Array object`, () => {

    it(`{} [1,2,3] => {'0':1,'1':2,'2':3}`, () => {
      assign.to({}, [1, 2, 3]).should.deep.equal({ '0': 1, '1': 2, '2': 3 });
    });

    it(`{a:1,b:2} [1,2,3] => {a:1,b:2,'0':1,'1':2,'2':3}`, () => {
      assign.to({ a: 1, b: 2 }, [1, 2, 3])
        .should.deep.equal({ a: 1, b: 2, '0': 1, '1': 2, '2': 3 });
    });

  });

  describe(`should copy own enum keys from user class`, () => {

    class Base {
      public a: number = 0;
      constructor(x: number) {
        this.a = x;
        return this;
      }
    }

    class BasePlus extends Base {
      public b: number = 0;
      constructor(x: number, y: number) {
        super(x);
        this.b = y;
        return this;
      }
    }

    it(`{} new BasePlus(1,2) => {a:1,b:2}`, () => {
      assign.to({}, new BasePlus(1, 2)).should.deep.equal({ a: 1, b: 2 });
    });

    it(`{a:1,b:2} new BasePlus(3,4) => {a:3,b:4}`, () => {
      assign.to({ a: 1, b: 2 }, new BasePlus(3, 4))
        .should.deep.equal({ a: 3, b: 4 });
    });

    it(`{c:1,d:2} new BasePlus(3,4) => {a:3,b:4,c:1,d:2}`, () => {
      assign.to({ c: 1, d: 2 }, new BasePlus(3, 4))
        .should.deep.equal({ a: 3, b: 4, c: 1, d: 2 });
    });

  });

  describe(`should copy ignore all non enum keys from user class`, () => {

    class Base {
      public a: number = 0;
      constructor(x: number) {
        this.a = x;
        return this;
      }
    }

    class BasePlus extends Base {
      public b: number = 0;
      constructor(x: number, y: number) {
        super(x);
        this.b = y;
        return this;
      }
    }

    Base['c'] = 100;
    Base.prototype['d'] = 200;
    BasePlus['e'] = 300;
    BasePlus.prototype['f'] = 400;

    it(`{} new BasePlus(1,2) => {a:1,b:2}`, () => {
      assign.to({}, new BasePlus(1, 2)).should.deep.equal({ a: 1, b: 2 });
    });

    it(`{a:1,b:2} new BasePlus(3,4) => {a:3,b:4}`, () => {
      assign.to({ a: 1, b: 2 }, new BasePlus(3, 4))
        .should.deep.equal({ a: 3, b: 4 });
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`{a:1,b:2} {c:3,d:4} {e:5,f:6} => {a:1,b:2,c:3,d:4,e:5,f:6}`, () => {

      const orig1: any = { a: 1, b: 2 };
      const orig2: any = { c: 3, d: 4 };
      const orig3: any = { e: 5, f: 6 };
      const input1: any = { a: 1, b: 2 };
      const input2: any = { c: 3, d: 4 };
      const input3: any = { e: 5, f: 6 };
      assign.to(input1, input2, input3)
        .should.deep.equal({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 });
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      input3.should.be.deep.equal(orig3);

    });

  });

});

