const test = require('node:test');
const assert = require('node:assert/strict');

const { evaluateSpin } = require('./site.js');

test('three matching symbols is a win', () => {
  const result = evaluateSpin(['7', '7', '7']);
  assert.equal(result.result, 'jackpot');
  assert.equal(result.message, 'Three sevens! WAIT WHA-');
});

test('three stars has its own jackpot message', () => {
  const result = evaluateSpin(['★', '★', '★']);
  assert.equal(result.result, 'jackpot');
  assert.equal(result.message, '3 stars!! You must be fan of Angry Birds.');
});

test('three diamonds has its own jackpot message', () => {
  const result = evaluateSpin(['♦', '♦', '♦']);
  assert.equal(result.result, 'jackpot');
  assert.equal(result.message, 'DIAMONDS!DIAMONDS!DIAMONDS!DIAMONDS!');
});

test('three clubs has its own jackpot message', () => {
  const result = evaluateSpin(['♣', '♣', '♣']);
  assert.equal(result.result, 'jackpot');
  assert.equal(result.message, 'Welcome to the club, Buddy.');
});

test('three hearts has its own jackpot message', () => {
  const result = evaluateSpin(['♥', '♥', '♥']);
  assert.equal(result.result, 'jackpot');
  assert.equal(result.message, 'Love is in the air! 3 hearts i guess.');
});

test('three clovers has its own jackpot message', () => {
  const result = evaluateSpin(['☘', '☘', '☘']);
  assert.equal(result.result, 'jackpot');
  assert.equal(result.message, 'Overwhelming luck!');
});

test('three bells has its own jackpot message', () => {
  const result = evaluateSpin(['🔔', '🔔', '🔔']);
  assert.equal(result.result, 'jackpot');
  assert.equal(result.message, '¿Te gusta Taco Bell?');
});

test('three cherries has its own jackpot message', () => {
  const result = evaluateSpin(['🍒', '🍒', '🍒']);
  assert.equal(result.result, 'jackpot');
  assert.equal(result.message, 'LeroLeroLeroLeroLeroLeroLeroLeroLeroLeroLeroLeroLeroLero-');
});

test('two matching symbols is a small win', () => {
  const result = evaluateSpin(['♥', '♥', '♣']);
  assert.equal(result.result, 'small-win');
  assert.ok(result.message.includes('Only 2 matching! 99% quit before BIG!!!'));
});

test('no match is a loss', () => {
  const result = evaluateSpin(['7', '♣', '♥']);
  assert.equal(result.result, 'loss');
  assert.ok(result.message.includes('NOTHING!!!!! LMAOOOOOOOOOOOOOOOO. Try again.'));
});
