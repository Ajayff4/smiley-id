# Smiley ID

A tiny, secure, URL-friendly, unique string ID generator for JavaScript.

> “Everything might not be perfect, we still hope
> smileyId will put a 😊”

* **Short IDs.** It uses larger alphanumeric and symbols than UUID and nanoid (`A-Za-z0-9-^_~#$%&*`).
* **Unique😊**  So our smileyIds are having way larger pull and a unique smiley seperator.
* **UUID/nanoid** If you still like UUID and nanoid formats to have along with smiley, we did that too.
* **OTP** If you need OTPs of upto 15 digits, smiley can provide that too.

> **Smiley id** is of length 16 which includes 3 smiley seperators which makes it string of 25 length.
```js
const smiley = require('smiley-id');
const smileyId = smiley.smileyId() //=> "kFpO^-^J#SO^-^36mr^-^OHg~"

```

> **OTPs** are of length 6 bydefault if length of OTP is not passed otherwise it can return OTP of upto 15 digits.
```js
const smiley = require('smiley-id');
const otp1 = smiley.otp() //=> "934496"
const otp2 = smiley.otp(4) //=> "0652"
const otp3 = smiley.smileyId('otp') //=> "934496"
const otp4 = smiley.smileyId('otp', 8) //=> "12345678"
```

> **nanoid** are of length 21 bydefault inspired by the actual nanoid project, if length of nanoid is not passed otherwise it returns nanoid of given length.
```js
const smiley = require('smiley-id');
const nanoid1 = smiley.nanoid() //=> "9lWVCogGENuLR9mX4_DDO"
const nanoid2 = smiley.nanoid(10) //=> "SXhjb-LECH"
const nanoid3 = smiley.smileyId('nanoid') //=> "9lWVCogGENuLR9mX4_DDO"
const nanoid4 = smiley.smileyId('nanoid',10) //=> "SXhjb-LECH"
```

> **uuid** are of length 32  inspired by the actual uuid project. It is seperated into 8-4-4-4-12 using hexadecimal characters. length of 36 if we consider 4 hyphons.
```js
const smiley = require('smiley-id');
const nanoid1 = smiley.uuid() //=> "c16a90a5-a5f2-ca29-f5d4-82934e67fca5"
const nanoid3 = smiley.smileyId('uuid') //=> "c16a90a5-a5f2-ca29-f5d4-82934e67fca5"
```
