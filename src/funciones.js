

function setup() {
  this.addEventListener("mousemove", resetTimer, false);
  this.addEventListener("mousedown", resetTimer, false);
  this.addEventListener("keypress", resetTimer, false);
  this.addEventListener("DOMMouseScroll", resetTimer, false);
  this.addEventListener("mousewheel", resetTimer, false);
  this.addEventListener("touchmove", resetTimer, false);
  this.addEventListener("MSPointerMove", resetTimer, false);

  startTimer();
}

function startTimer() {
  // wait 2 seconds before calling goInactive
  timeoutID = window.setTimeout(goInactive, 1800000);
}

function resetTimer(e) {
  window.clearTimeout(timeoutID);

  goActive();
}

function goInactive() {
  // do something
  // alert("inactivo");
  window.location.reload();
}

function goActive() {
  // do something

  startTimer();
}