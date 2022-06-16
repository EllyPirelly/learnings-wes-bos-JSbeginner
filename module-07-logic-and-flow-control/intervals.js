// SET TIMEOUT

// Anonymous function
/* setTimeout(function() {
  console.log('done');
}, 500); */


// Reference to a function
/* function buzzer() {
  console.log('buzzed');
}
console.log('starting');
setTimeout(buzzer, 500);
console.log('finishing'); */



// SET INTERVAL
// These examples will run every 2000 milliseconds unless you abort them!

// Anonymous function
/* setInterval(function() {
  console.log('intervalled');
}, 2000); */


// Reference to a function
/* function intervalled() {
  console.log('intervalled');
}
console.log('starting');
setInterval(intervalled, 2000);
console.log('finishing'); */


// Create own interval
/* function intervalling() {
  console.log('intervalling my own');
}
function setImmediateInterval(funcToRun, ms) {
  // right away call that function
  funcToRun();
  // run a regular interval
  return setInterval(funcToRun, ms);
}
// setImmediateInterval(intervalling, 500); */



// CLEARING / STOPPING - setTimeout

// if someone doesn't click for 2 sec, destroy the web page
/* function destroy() {
  document.body.innerHTML = `<p>destroyed</p>`;
}
setTimeout(destroy, 2000); */

// if someone doesn't click for 2 sec, destroy the web page BUT
// if someone DOES click it, clear this
/* function destroy() {
  document.body.innerHTML = `<p>destroyed</p>`;
}
const bombTimer = setTimeout(destroy, 2000);
// console.log(typeof bombTimer); // number; it's a reference to all timers currently on the page

window.addEventListener('click', function () {
  console.log('clicked, not destroyed');
  // how do I stop the timer from running?
  // save reference to bombTimer
  clearTimeout(bombTimer);
}); */



// CLEARING / STOPPING - setInterval
/* const poopInterval = setInterval(function () {
  console.log('💩');
  console.log('har har');
}, 10);

window.addEventListener('click', function () {
  clearInterval(poopInterval);
  console.log('stop silly pooping');
}); */


// CLEARING / STOPPING - setInterval and setTimeout
// run this every 100 milliseconds but after 3 seconds stop it entirely
const poopInterval = setInterval(function () {
  console.log('💩');
  console.log('har har');
}, 100);

setTimeout(function () {
  clearInterval(poopInterval);
  console.log('pooping stopped');
}, 3000);
