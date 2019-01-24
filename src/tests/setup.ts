import GameWindow from "../interfaces/GameWindow";
const gl = require('gl');

export function mockDocumentBody() {
  document.body.innerHTML = '<canvas id="renderCanvas" touch-action="none"></canvas>';
}

export function mockCanvas() {
  const gameWindow = window as GameWindow;
  gameWindow.canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
  gameWindow.canvas.getContext = () => gl(500, 500);
}

export default () => {
  mockDocumentBody();
  mockCanvas();
}