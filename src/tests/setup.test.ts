import { mockCanvas, mockDocumentBody } from './setup';
import GameWindow from '../interfaces/GameWindow';

test('correctly mock document body', () => {
  mockDocumentBody();
  expect(document.body.innerHTML).toBe('<canvas id="renderCanvas" touch-action="none"></canvas>');
});

test('correctly mock canvas', () => {
  mockCanvas();
  expect((window as GameWindow).canvas).toBeDefined();
});