"use strict"

window.onload = init;

function init(){
    const calcMortgageBtn = document.getElementById("calcMortgageBtn");
    const calcCDValueBtn = document.getElementById("calcCDValueBtn");
    const calcPresentValueBtn = document.getElementById("calcPresentValueBtn");

    if(calcMortgageBtn != null){
        calcMortgageBtn.onclick = onCalculateMortgageBtn;
    }
    else if (calcCDValueBtn != null){
        calcCDValueBtn.onclick = onCalculateCDValueBtn;
    }
    else if(calcPresentValueBtn != null){
        calcPresentValueBtn.onclick = onCalculatePresentValueBtn;   
    }
}

function onCalculateMortgageBtn(){
    var principalAmount = Number(document.getElementById("principalAmount").value);
    var interestRate = Number(document.getElementById("interestRate").value);
    var loanLength = Number(document.getElementById("loanLength").value);
    // monthly rate
    interestRate = (interestRate*0.01)/12;
    // years to months
    loanLength = loanLength*12;

    var resultMonthly = ((principalAmount*interestRate)*Math.pow((1+interestRate), loanLength))/(Math.pow((1+interestRate), loanLength)-1);
    document.getElementById("monthlyPay").value = resultMonthly.toFixed(2);
    var resultTotalInt = (resultMonthly*loanLength) - principalAmount;
    document.getElementById("totalInterest").value = resultTotalInt.toFixed(2);

}

function onCalculateCDValueBtn(){
    var depositAmount = Number(document.getElementById("depositAmount").value);
    var interestCDRate = Number(document.getElementById("interestCDRate").value);
    var termCDLength = Number(document.getElementById("termCDLength").value);
    interestCDRate = interestCDRate * 0.01;

    // A = P(1+r/n)(nt)
    var resultCDValue = depositAmount * Math.pow(1+(interestCDRate/365), (365 * termCDLength));
    document.getElementById("futureValue").value = resultCDValue.toFixed(2);
    var resulTotalInterest = resultCDValue - depositAmount;
    document.getElementById("totalInterestEarned").value = resulTotalInterest.toFixed(2);
}

function onCalculatePresentValueBtn(){
    var paymentAmount = Number(document.getElementById("paymentAmount").value);
    var interestPVRate = Number(document.getElementById("interestPVRate").value);
    var numYears = Number(document.getElementById("numYears").value);
    interestPVRate = (interestPVRate * 0.01)/12;
    var termPay = numYears*12;

    var resultPVAmount = paymentAmount*((1-(1+interestPVRate)**-termPay)/interestPVRate);
    document.getElementById("presentValue").value = resultPVAmount.toFixed(2);
    // alert("Hello");
}