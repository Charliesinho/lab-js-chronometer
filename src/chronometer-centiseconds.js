class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {    
    const count = () => {
      this.currentTime += 1;
    };
    this.intervalId = setInterval((count), 10);
    if(printTimeCallback) {
    setInterval((printTimeCallback), 10);
    }    
  }

  getMinutes() {
    let getMinutes = this.currentTime/6000
    getMinutes = Math.floor(getMinutes);
    return getMinutes;
  }

  getSeconds() {
    let getSeconds = Math.floor(this.currentTime/100 % 60);
    return getSeconds;
  }

  getCentiseconds() {
    let getCentiSeconds = this.currentTime/1 % 100;
    return getCentiSeconds;
  }

  computeTwoDigitNumber(value) {
    let doubleDigit = `${value}`;
    if (doubleDigit.length === 1) {
     return `0${value}`
    } else {
      return `${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`
  }
}