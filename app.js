const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
let futureDate = new Date(tempYear, tempMonth, tempDay+8,17,22,0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
console.log(`giveaway ends on ${weekday} ${day} ${month} ${year}  ${hours}:${minutes}am`)

giveaway.textContent = `giveaway ends on ${weekday} ${day} ${month} ${year}  ${hours}:${minutes}am`

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
 const rightNow = new Date().getTime();
 const t = futureTime-rightNow;
 const oneDay = 24*60*60*1000;
 const oneHour = 60*60*1000;
 const oneMinute = 60*1000;
 let days = Math.floor(t/oneDay);
 let hours = Math.floor((t%oneDay)/oneHour);
 let minutes = Math.floor((t%oneHour)/ oneMinute);
 let seconds = Math.floor((t%oneMinute)/1000);

 const values = [days, hours, minutes, seconds];

 const format = (item) => {
  if(item<10)
    return item = `0${item}`
  return item
 }
  items.forEach((item,idx)=>{
    item.innerHTML = format(values[idx]);
  })
  if(t <=0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry this givaway has expired</h4>`
  }
    

 return [days, hours, minutes, seconds];
}
// countdown 
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();