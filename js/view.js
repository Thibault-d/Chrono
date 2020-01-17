class View {
  constructor() {
    this.createInterface()
  }

  createInterface() {
    const container = document.getElementById('root');
    container.innerHTML = `
      <h1>My Chrono</h1>
      <div id="timer">
        00:00:00
      </div>
      <button id="start">Start</button>
      <button id="stop">Stop</button>
      <button id="reset">Reset</button>
    `;
  }

  showTimer(time) {
    const timerPlaceholder = document.getElementById('timer');
    timerPlaceholder.innerHTML = time;
  }

  startListener(callback) {
    const startButton = document.getElementById('start');
    startButton.addEventListener('click', callback);
  }

  stopListener(callback) {
    const stopButton = document.getElementById('stop');
    stopButton.addEventListener('click', callback);
  }

  resetListener(callback) {
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', callback);
  }
}