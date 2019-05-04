## valToken 

Module that verifies that a coupon code is valid and is not expired.

## Installation

    $ npm install val-token

## Example

```js
const valToken = require("./index");

const checkCoupon = valToken('123','123','September 5, 2014','October 1, 2014');
console.log(checkCoupon); // true...
```