const days = document.getElementById('days'); 
const hours = document.getElementById('hours');
const mins = document.getElementById('mins'); 
const secs = document.getElementById('secs'); 

function countdown(){
     const newyearsDate = new Date('1 Jan 2024'); 
     const currentDate = new Date(); 

     const totalDate = Math.floor(newyearsDate - currentDate) /1000

     const day = Math.floor(totalDate / 86400 );
     const hour = Math.floor(totalDate /3600) % 24; 
     const min =  Math.floor(totalDate /3600 * 60 ) % 60;
     const sec = Math.floor(totalDate % 60);
     console.log(day, hour, min, sec);
     days.innerHTML = day;
     hours.innerHTML = setTime(hour);
     mins.innerHTML = setTime(min);
     secs.innerHTML = setTime(sec);
}
function setTime(time){
     return time < 10 ? `0${time}` : time;
}
    
countdown();

setInterval(countdown, 1000);
