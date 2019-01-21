
import setup from '../setup';
import GameWindow from '../../interfaces/GameWindow';
import { start } from '../../scenes/firstScene';

describe('index scene', () => {
  beforeAll(() => setup());

  test('correctly initializes the engine', () => {
    const gameWindow = window as GameWindow;
    start(gameWindow);
  });
});