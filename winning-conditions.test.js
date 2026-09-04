const test = require('node:test');
const assert = require('node:assert/strict');

const { evaluateSpin } = require('./Assets/JS/site.js');

test('three matching symbols is a win', () => {
  const result = evaluateSpin(['7', '7', '7']);
  assert.equal(result.result, 'jackpot');
  assert.ok(result.message.includes('Jackpot'));
});

test('two matching symbols is a small win', () => {
  const result = evaluateSpin(['♥', '♥', '♣']);
  assert.equal(result.result, 'small-win');
  assert.ok(result.message.includes('Two of a kind'));
});

test('no match is a loss', () => {
  const result = evaluateSpin(['7', '♣', '♥']);
  assert.equal(result.result, 'loss');
  assert.ok(result.message.includes('Try again'));
});
