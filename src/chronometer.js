class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {    
    const count = () => {
      this.currentTime += 1;
    };
    this.intervalId = setInterval((count), 1000);
    if(printTimeCallback) {
    setInterval((printTimeCallback), 1000);
    }    
  }

  getMinutes() {
    let getMinutes = this.currentTime/60
    getMinutes = Math.floor(getMinutes);
    return getMinutes;
  }

  getSeconds() {
    let getSeconds = this.currentTime % 60;
    return getSeconds;
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
    return `${minutes}:${seconds}`
  }
}



