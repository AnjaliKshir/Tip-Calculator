//global access

let billtotal_ip_div = document.getElementById("billtotal_ip");
let tip_ip_div = document.getElementById("tip_ip");
let no_of_ppl_div = document.getElementById("no_of_ppl");
let total_per_person_div = document.getElementById("total_per_person");
let buttonSuggestion = document.querySelectorAll(".suggestion");
let no_of_ppl = Number(no_of_ppl_div.innerText);
let tip = 0;
let total_per_person = 0;

// listen for each button clicked
buttonSuggestion.forEach(function (button) {
  button.addEventListener("click", function (event) {
    // Retrieve the value of the clicked button
    tip = event.target.value;
    tip_ip_div.value = tip;
    tip = tip / 100;
    // called calcBill here to update bill value after adding tip
    CalcBill();
  });
});

function showBill() {
  /* display the total
    .toLocaleString('en-Us') --> 3,300, 1,20,000
    .toFixed() sets the no. of digits after decimal */
  total_per_person_div.innerText = `$${total_per_person.toFixed(2)}`;
}

const CalcBill = () => {
  const bill = Number(billtotal_ip_div.value);
  const tip_amount = bill * tip;
  const total_amount = bill + tip_amount;
  total_per_person = total_amount / no_of_ppl;
  showBill();
};

const increasePeople = () => {
  no_of_ppl += 1;
  no_of_ppl_div.innerText = no_of_ppl;
  CalcBill();
};

const decreasePeople = () => {
  if (no_of_ppl <= 1) {
    alert("Solo diner? No tip split! Add a buddy or treat yo'self! ️");
    return;
  }
  no_of_ppl -= 1;
  no_of_ppl_div.innerText = no_of_ppl;
  CalcBill();
};
