function Time() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours<10?`0${hours}`:`${hours}`
  minutes = minutes<10?`0${minutes}`:`${minutes}`
  seconds = seconds<10?`0${seconds}`:`${seconds}`

  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}
Time();
setInterval(Time, 1000);
