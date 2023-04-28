"use strict"

window.onload = init;

function init(){
    const calcBtn = document.getElementById("calcMortgageBtn");
    calcBtn.onclick = onCalculateBtn;
}

function onCalculateBtn(){
    var principalAmount = Number(document.getElementById("principalAmount").value);
    var interestRate = Number(document.getElementById("interestRate").value);
    var loanLength = Number(document.getElementById("loanLength").value);
    interestRate = (interestRate*0.01)/12;
    loanLength = loanLength*12;

    var resultMonthly = ((principalAmount*interestRate)*Math.pow((1+interestRate), loanLength))/(Math.pow((1+interestRate), loanLength)-1);
    document.getElementById("monthlyPay").value = resultMonthly.toFixed(2);

    var resultTotalInt = (resultMonthly*loanLength) - principalAmount;
    document.getElementById("totalInterest").value = resultTotalInt.toFixed(2);

}

