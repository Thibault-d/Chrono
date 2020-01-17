class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.model.setOnChange(this.onChangeTimer.bind(this));
    this.view.startListener(this.start.bind(this));
    this.view.stopListener(this.stop.bind(this));
    this.view.resetListener(this.reset.bind(this));
  }

  onChangeTimer(timer) {
    // console.log(timer);
    this.view.showTimer(timer);
  }

  start() {
    this.model.start()
  }

  stop() {
    this.model.stop();
  }

  reset() {
    this.model.reset();
  }

}

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM Content loaded');

  // const myTimer = new Chrono();
  const myApp = new Controller(new Chrono, new View);
})