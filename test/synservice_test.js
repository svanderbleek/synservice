var tape = require('tape');
var Synservice = require('../lib/synservice');

tape('Synservice constructor', function(test) {
  test.equal(typeof(Synservice), 'function');
  test.end();
});

tape('Synservice instance', function(test) {
  var synservice = new Synservice(String, []);
  test.equal(typeof(synservice), 'object');
  test.equal(typeof(synservice.applyMethod), 'function');
  test.end();
});

tape('with service and parameterGroups', function(test) {
  var Service = function(parameters) { this.parameters = parameters };
  Service.prototype.method = function(a1, a2) {
    test.equal(a1, 1);
    test.equal(a2, 2);
    return JSON.stringify({c: [this.parameters.p]});
  }
  var parameterGroups = [{p: 3}, {p: 4}];
  var synservice = new Synservice(Service, parameterGroups);
  var joined = synservice.applyMethod('method', 1, 2);
  test.same(joined, {c: [3, 4]});
  test.end();
});
