var assert = require('assert');
var node = require('../src/node.js');

describe('node test', function() {
    it('should create a opeartor node', function() {
        var expected = {
            type: "Operator",
            value: '+',
            evaluate: {
                '+': function() {}
            }
        }
        var actual = node.createOperatorNode('+');
        assert.equal(expected.type, actual.type);
        assert.equal(expected.value, actual.value);
    });

    it('should create a number node', function() {
        var expected = {
            type: "Number",
            value: 5,
            evaluate: function() {
                return this.value
            }
        }
        var actual = node.createNumberNode(5);
        assert.equal(expected.type, actual.type);
        assert.equal(expected.value, actual.value);
        assert.equal(expected.evaluate(), actual.evaluate());
    });

    it('should create a identifier node', function() {
        var expected = {
            type: "Identifier",
            value: 'x',
            evaluate: function() {
                return this.value
            }
        }
        var actual = node.createIdentifierNode('x');
        assert.equal(expected.type, actual.type);
        assert.equal(expected.value, actual.value);
        assert.equal('x', actual.evaluate());
    });
});
