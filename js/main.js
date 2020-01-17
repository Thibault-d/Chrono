class Chrono {
  constructor() {
    this.numOfSecons = 0;
    this.intervalId = undefined;
  }

  /**
   * Start timer if doesn't have one started
   */
  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.numOfSecons++
        this.showTime()
      }, 1000)
    }
  }

  /**
   * Stops the timer if was already started
   */
  stop() {
    if (!!this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  /**
   * Reset the internal timer
   */
  reset() {
    this.numOfSecons = 0;
  }

  /**
   * Return a number adding a digit in front of it, if number passed it have two digit it will remain the same
   * @param {number} number  
   * @returns {string} string
   */
  _convertToStringWithTwoDigits(number) {
    return (number / 100).toFixed(2).split('.')[1];
  }

  showTime() {
    const seconds = this._convertToStringWithTwoDigits(this.numOfSecons % 60); // remaining seconds 
    const minutes = this._convertToStringWithTwoDigits(Math.floor(this.numOfSecons / 60) % 60); // remaining minutes
    const hours = this._convertToStringWithTwoDigits(Math.floor(this.numOfSecons / 60 / 60)); // number of hours
    console.log(`${hours}:${minutes}:${seconds}`);
  }
}