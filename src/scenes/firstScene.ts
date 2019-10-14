import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
  MeshBuilder,
} from 'babylonjs';
import GameWindow from '../interfaces/GameWindow';

export function createScene({ engine, canvas }: GameWindow): Scene {
  const scene: Scene = new Scene(engine);

  var camera: ArcRotateCamera = new ArcRotateCamera(
    'Camera',
    Math.PI / 2,
    Math.PI / 2,
    2,
    Vector3.Zero(),
    scene,
  );
  camera.attachControl(canvas, true);

  new HemisphericLight('light1', new Vector3(1, 1, 0), scene);

  MeshBuilder.CreateSphere('sphere', { diameter: 1 }, scene);

  return scene;
}

export function start(window: Window) {
  const gameWindow = window as GameWindow;
  gameWindow.engine = new Engine(gameWindow.canvas, true);
  const scene: Scene = createScene(gameWindow);

  gameWindow.engine.runRenderLoop(() => {
    scene.render();
  });
}
