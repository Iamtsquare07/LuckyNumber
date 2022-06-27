// Start of generate number algorithm
let programbox = document.querySelector("#main")
let programBody = document.querySelector("#body");
let successMessage = document.querySelector("#success");
let loadImage = "https://www.sonscores.com/wp-content/uploads/2021/09/sonscore-load.gif";
const startGen = document.querySelector("#startAI");
const ticketNumber = document.querySelector("#ticketNo");

var processGenerator = (ai) => {
  programBody.innerHTML = "";
successMessage.innerHTML = "Initializing...";
const gererateNumber = (val) => {
  return Math.floor(Math.random() * val)+1;
}
var loadCountdown = "https://i.pinimg.com/originals/ae/b0/11/aeb01108d342546c1970615ecd2da754.gif";
  if (Number(ticketNumber.value) === 0){
    successMessage.innerHTML = "Invalid number of Tickets, enter a number.";
    ticketNumber.focus();
  }else if (ticketNumber.value === ""){
    successMessage.innerHTML = "Please enter total ticket number";
    ticketNumber.focus();
  }else if (Number(ticketNumber.value) === 1) {
    successMessage.innerHTML = "1 ticket is not enough, add more tickets and run app again.";
    ticketNumber.focus();
  }else {
    setTimeout(() => {
  successMessage.innerHTML = "Hang on! processing...";
  programBody.innerHTML = `<img src="${loadImage}" width="50px" height="50px">`;
  setTimeout(() => {
    setTimeout(() => {
      let totalTickets = ticketNumber.value;
      programBody.innerHTML = `Winner is Number: <span style="color:gold">${gererateNumber(totalTickets)}</span>
      <br><p>Congratulations!</p>`;
    successMessage.innerHTML = `Successful!`;
    }, 4000);
    programBody.innerHTML = `<img src="${loadCountdown}" width="50px" height="50px">`;
    successMessage.innerHTML = "Generating!";
  }, 8000)
}, 2000)
  }
}
ticketNumber.addEventListener('keypress', function (e) {
if (e.key === 'Enter') processGenerator();
}); 