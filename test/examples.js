import smiley from '../index.js';

// default 6 digit OTP
console.log('otp: ', smiley.otp());

// default 21 length nanoid
console.log('nanoid: ', smiley.nanoid());

// default 32 length uuid
console.log('uuid: ', smiley.uuid());

// default 16 length smileyId
console.log('smileyId: ', smiley.smileyId());

//default OTP using smiley.smileyId()
console.log('otp via smileyId: ', smiley.smileyId('otp'));

//4 digit OTP using smiley.smileyId()
console.log('otp via smileyId: ', smiley.smileyId('otp', 4));

//default nanoid using smiley.smileyId()
console.log('nanoid via smileyId: ', smiley.smileyId('nanoid'));

//10 length nanoid using smiley.smileyId()
console.log('nanoid via smileyId: ', smiley.smileyId('nanoid', 10));

//default uuid using smiley.smileyId()
console.log('uuid via smileyId: ', smiley.smileyId('uuid'));
