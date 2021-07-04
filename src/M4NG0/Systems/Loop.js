import { Clock } from 'three';

const clock = new Clock();

class Loop {
  constructor(orchestrator) {
    this.orchestrator = orchestrator;
    this.renderer = orchestrator.renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();

      this.orchestrator.render()
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    const delta = clock.getDelta();
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };
