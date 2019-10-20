// Write your JavaScript here
var change = {
  dollars: 0,
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
};

function delayLoop(i, end, id) {
   setTimeout(function () {
     if (i <= end) {
      document.getElementById(id).innerHTML = i;
      delayLoop(++i, end, id)
     }
   }, 100/i);
}



function changeHandler(e) {
  var amountDue = document.getElementById("amount-due").value;
  var amountReceived = document.getElementById("amount-received").value;

  var remainingChange = amountReceived - amountDue;

  change["dollars"] = Math.round(remainingChange - (remainingChange % 1));
  remainingChange -= change["dollars"];
  change["quarters"] = Math.round(
    (remainingChange - (remainingChange % 0.25)) / 0.25
  );
  remainingChange -= change["quarters"] * 0.25;
  change["dimes"] = Math.round(
    (remainingChange - (remainingChange % 0.1)) / 0.1
  );
  remainingChange -= change["dimes"] * 0.1;
  change["nickels"] = Math.round(
    (remainingChange - (remainingChange % 0.05)) / 0.05
  );
  remainingChange -= change["nickels"] * 0.05;
  change["pennies"] = Math.round(remainingChange / 0.01);

  delayLoop(0, change["dollars"], "dollars-output");
  delayLoop(0, change["quarters"], "quarters-output");
  delayLoop(0, change["dimes"], "dimes-output");
  delayLoop(0, change["nickels"], "nickels-output");
  delayLoop(0, change["pennies"], "pennies-output");
}

document.getElementById("calculate-change").onclick = changeHandler;
