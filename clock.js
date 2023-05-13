
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', ()=>{
  timer = true;
  stopWatch()
});

stopBtn.addEventListener('click', ()=>{
  timer = false;
});

resetBtn.addEventListener('click', ()=>{
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";

});

function stopWatch(){
  if(timer){
    count++;
    if(count == 100){
      second++;
      count = 0
    };
    if(second == 60){
      minute++;
      second = 0;
    };
    if(minute == 60){
      hour++;
      second = 0;
      minute = 0;
    }
  };
  let hrString = hour;
  let minString = minute;
  let secString = second;
  let conString = count;

  if(hour < 10 ){
    hrString = "0" + hrString;
  }
  if(minute < 10){
    minString = "0" + minString;
  };
  if(second < 10){
    secString = "0" + secString
  };
  if(count < 10) {
    conString = "0" + conString
  };

  document.getElementById("hr").innerHTML = hrString;
  document.getElementById("min").innerHTML = minString;
  document.getElementById("sec").innerHTML = secString;
  document.getElementById("count").innerHTML = conString;
  setTimeout(stopWatch, 10.5)
  console.log(stopWatch.now);

}


