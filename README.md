[![Coverage Status](https://coveralls.io/repos/github/CamelKing/beta/badge.svg?branch=master)](https://coveralls.io/github/CamelKing/beta?branch=master)

# BETA - Typescript Functional Toolkits I - Array Handling

###### Last revision: June 22, 2017.  This date: June 20, 2017.  Author: Camel King.

This is a compilation of common utilities dealing with Arrays currently exist within the Javascript community (mostly Lodash), ported/rewritten/refactored into **Typescript** with the followings key changes:

1. ***Functional*** in nature
> the original input array will not be altered in anyway, and a new array is always returned.

2. Rellying on ***Typescript*** built-in checking mechanism. 
> Many of the types and validity checkings for function parameters are done at pre-compilation time. Hopefully the code is much lighter this way.

3. Using latest features of ***ES6+*** 
> This code are intended for the future, as such do not want to carry the baggage and burdern of backward compatibility. Node Js 8 is the targeted environment, and it should runs in latest Chrome browser.
> In addition, we won't be replacing any built-in functions avaibale in ES6+ simply because we believe it can perform better.

4. Focus on ***readibility*** rather than purely performant code.
> The reason why I have chosen Typescript is for it's ease of coordination within a sizable team of developers. At times, code overly optimised for performance can be hard to refactored, debug or even just to read and understand for new comers. For such a project, we value ease of maintenance, team work cooperation over a code that is 10ms faster.

5. ***Performance*** is still important
> While we value readability, it does not mean we will sacrifice performance completely. We still want to optimise the code so that it performs well, especially in Node Js and Chrome V8 environment. 

6. ***Elegant*** Code
> We believe coding is an act of art. As such, all solutions should be as elegant as possible.

7. ***Vanilla javascript*** and ***minimum dependency***
> The library is coded in vanilla javascrip (ES6+), no external library dependencies, and minimum dependency on other modules within the BETA library as well.
