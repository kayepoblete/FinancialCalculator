"use strict"

window.onload = init;

function init(){
    const calcMortgageBtn = document.getElementById("calcMortgageBtn");
    const calcCDValueBtn = document.getElementById("calcCDValueBtn");

    calcMortgageBtn.onclick = onCalculateMortgageBtn;
    calcCDValueBtn.onclick = onCalculateCDValueBtn;
}

function onCalculateMortgageBtn(){
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

function onCalculateCDValueBtn(){
    var depositAmount = Number(document.getElementById("depositAmount").value);


    // A = P(1+r/n)(nt)
}
