var test = require('tape');
// require('tabe').createStream( test );
var dop = require('../dist/nodejs');


var data = {
    string: 'string',
    boolean: true,
    number: -123,
    Infinity: -Infinity,
    float: 1.234153454354341,
    long: 12313214234312324353454534534,
    undefined: undefined,
    null: null,
    regexp:  /molamazo/g,
    date: new Date(),
    "~dop": "Mola",
    und: "~U",
    inf: '~I',
    fun: '~F',
    nan: '~N',
    reg: '~R',
};


test('Multiple data', function(t) {
    var decoded = dop.decode(dop.encode(data));
    t.deepEqual(decoded, data, 'deepEqual');
    data.NaN = NaN;
    data.function = function(){};
    decoded = dop.decode(dop.encode(data));
    t.equal(JSON.stringify(decoded), JSON.stringify(data), 'Stringify');
    t.equal(typeof decoded.function, 'function', 'Has function');
    // console.log( decoded);
    t.end();
});

