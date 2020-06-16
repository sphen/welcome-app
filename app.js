// DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus"),
  circ = document.getElementById("circ"),
  sunContain = document.getElementById("sun-contain"),
  sun = document.getElementById("sun");

// event listeners
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Show the Time
// update by second

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    seconds = today.getSeconds();

  // if hour greater than or equal noon output PM, if not output AM
  const amPM = hour >= 12 ? "pm" : "am";

  // 12 hour format
  // set hour equal to hours modulo 12 or 12
  hour = hour % 12 || 12;

  // output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    seconds
  )}${amPM}`;

  setTimeout(showTime, 1000);
}

// set date
function setDate() {
  let today = new Date(),
    day = today.getDate(),
    mnth = today.getMonth(),
    year = today.getFullYear();
  console.log(day);
  date.innerHTML = today.toDateString();
}

// add zero to single digits
function addZero(num) {
  // pass function num, parse as int, if less than 10 add 0 in front, else add nothing
  return (parseInt(num, 10) < 10 ? "0" : "") + num;
}

// set background and greeting by time of day
function bgGreet() {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 8) {
    // morning
    document.body.style.background = "#e8d9d5";
    circ.style.bottom = "-200px";
    circ.style.top = "";
    sunContain.style.alignItems = "flex-end";
    sun.style.fill = "#e9a694";
    greeting.textContent = "Good Morning";
  } else if (hour < 12) {
    // afternoon
    document.body.style.background = "#e8d9d5";
    circ.style.bottom = "-200px";
    sun.style.fill = "#ffcc59";
    greeting.textContent = "Good Morning";
  } else if (hour < 17) {
    // afternoon
    document.body.style.background = "#fdf7e7";
    sun.style.fill = "#ffcc59";
    greeting.textContent = "Good Afternoon";
  } else if (hour < 21) {
    // afternoon
    document.body.style.background = "#d3c9da";
    circ.style.top = "-200px";
    sun.style.fill = "#f6b6b7";
    greeting.textContent = "Good Evening";
  } else {
    // night
    document.body.style.background = "#242a2f";
    document.body.style.color = "#afafaf";
    circ.style.bottom = "";
    circ.style.top = "-200px";
    sunContain.style.alignItems = "flex-start";
    sun.style.fill = "#42454d";
    greeting.textContent = "Good Night";
  }
}

// get name
function getName() {
  if (!localStorage.getItem("name")) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// set name
function setName(e) {
  if (e.type === "keypress") {
    // make sure 'enter' is pressed
    // 'enter' is keycode 13
    if (e.which == 12 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// get focus
function getFocus() {
  if (!localStorage.getItem("focus")) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// set focus
function setFocus(e) {
  if (e.type === "keypress") {
    // make sure 'enter' is pressed
    // 'enter' is keycode 13
    if (e.which == 12 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

// run
showTime();
setDate();
bgGreet();
getName();
getFocus();
