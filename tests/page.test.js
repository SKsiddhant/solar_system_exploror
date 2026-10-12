const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.join(__dirname, '..', 'solar_system_explorer.html'), 'utf8');
const load = () => new JSDOM(html, { runScripts: 'dangerously', pretendToBeVisual: true });
const key = (win, target, k) =>
  target.dispatchEvent(new win.KeyboardEvent('keydown', { key: k, bubbles: true, cancelable: true }));

test('renders the Sun and eight planets', () => {
  const { document } = load().window;
  const names = [...document.querySelectorAll('.planet-name')].map(n => n.textContent);
  assert.deepStrictEqual(names, ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']);
});

test('click opens the dialog with details and the close button closes it', () => {
  const { document } = load().window;
  const modal = document.getElementById('modal');
  document.querySelectorAll('.planet-card')[3].click();
  assert.ok(modal.classList.contains('active'));
  assert.strictEqual(document.getElementById('modalTitle').textContent, 'Earth');
  assert.match(modal.textContent, /12,742 km/);
  document.querySelector('#modalContent .close-btn').click();
  assert.ok(!modal.classList.contains('active'));
});

test('Sun shows temperature and composition, planets show day/year length', () => {
  const { document } = load().window;
  const cards = document.querySelectorAll('.planet-card');
  cards[0].click();
  assert.match(document.getElementById('modalContent').textContent, /Temperature/);
  cards[1].click();
  assert.match(document.getElementById('modalContent').textContent, /Year Length/);
});

test('cards are keyboard operable and Escape closes with focus restored', () => {
  const dom = load();
  const { document } = dom.window;
  const card = document.querySelectorAll('.planet-card')[5];
  assert.strictEqual(card.getAttribute('role'), 'button');
  assert.strictEqual(card.tabIndex, 0);
  key(dom.window, card, 'Enter');
  const modal = document.getElementById('modal');
  assert.ok(modal.classList.contains('active'));
  assert.strictEqual(document.activeElement, document.querySelector('#modalContent .close-btn'));
  key(dom.window, document.activeElement, 'Escape');
  assert.ok(!modal.classList.contains('active'));
  assert.strictEqual(document.activeElement, card);
});

test('clicking the backdrop closes the dialog', () => {
  const { document } = load().window;
  document.querySelectorAll('.planet-card')[2].click();
  document.getElementById('modal').click();
  assert.ok(!document.getElementById('modal').classList.contains('active'));
});
