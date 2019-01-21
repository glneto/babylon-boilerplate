import GameWindow from "../interfaces/GameWindow";

export function mockDocumentBody() {
  document.body.innerHTML = '<canvas id="renderCanvas" touch-action="none"></canvas>';
}

export function mockCanvas() {
  const gameWindow = window as GameWindow;
  gameWindow.canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
  gameWindow.canvas.getContext = () => require('gl')(500, 500);
  gameWindow.canvas.innerHTML = '<canvas id="renderCanvas" touch-action="none"></canvas>';
}

export default () => {
  mockDocumentBody();
  mockCanvas();
}