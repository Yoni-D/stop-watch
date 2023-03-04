let ominute = document.getElementById("outputMinute");
let nMinute = parseInt(ominute.textContent);
let osecond = document.getElementById("outputSecond");
let nSecond = parseInt(osecond.textContent);
let hour = document.getElementById("outputHour");
let nHour = parseInt(hour.textContent);
let stopInterval;

function second() {
  stopInterval = setInterval(function () {
    nSecond++;
    if (nSecond <= 9) {
      osecond.innerText = "0" + nSecond;
    }
    if (nSecond > 9) {
      osecond.innerText = nSecond;
    }
    if (nSecond > 59) {
      nSecond = 0;
      osecond.innerHTML = "0" + 0;
      nMinute++;
      if (nMinute > 59) {
        nMinute = 0;
        ominute.innerHTML = "0" + 0;
        nHour++;
        if (nHour <= 9) {
          hour.innerText = "0" + nHour;
        }
        if (nHour > 9) {
          hour.innerText = nHour;
        }
      } else if (nMinute <= 9) {
        ominute.innerText = "0" + nMinute;
      } else {
        ominute.innerText = nMinute;
      }
    }
  }, 10);
}
function stopit() {
  clearInterval(stopInterval);
}

function reset() {
  nSecond = 0;
  nMinute = 0;
  nHour = 0;
  osecond.innerText = "00";
  ominute.innerText = "00";
  hour.innerText = "00";
  const lapDiv = document.querySelector(".lap-begins");
  lapDiv.innerHTML = "";
}

function lap() {
  const sec = [];
  const min = [];
  const hr = [];
  if (nSecond < 9) {
    sec.push("0" + nSecond);
  } else {
    sec.push(nSecond);
  }
  if (nMinute < 9) {
    min.push("0" + nMinute);
  } else {
    min.push(nMinute);
  }
  if (nHour < 9) {
    hr.push("0" + nHour);
  } else {
    hr.push(nHour);
  }
  const code = `<div class="lap-record">${hr[0]}:${min[0]}:${sec[0]}</div>`;
  const div = document.querySelector(".lap-begins");
  div.insertAdjacentHTML("afterbegin", `${code}`);
}

document.getElementById("inputStart").addEventListener("click", function () {
  document.getElementById("inputStop").disabled = false;
  second();
});

document.getElementById("inputReset").addEventListener("click", reset);
document.getElementById("inputStop").addEventListener("click", stopit);
document.getElementById("inputLap").addEventListener("click", lap);
