var rlp = require('rlp');

exports._rlpEncode = rlpval => Buffer.from(rlp.encode(rlpval));

exports._rlpNull = null;
