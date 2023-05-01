"use strict"

window.onload = init;

function init(){
    const calcMortgageBtn = document.getElementById("calcMortgageBtn");
    const resetMortgageBtn = document.getElementById("resetMortgageBtn");
    const calcCDValueBtn = document.getElementById("calcCDValueBtn");
    const calcPresentValueBtn = document.getElementById("calcPresentValueBtn");
    const resetCDBtn = document.getElementById("resetCDBtn");
    const resetPVBtn = document.getElementById("resetPVBtn");

    if(calcMortgageBtn != null){
        calcMortgageBtn.onclick = onCalculateMortgageBtn;
        resetMortgageBtn.onclick = onResetMortgageBtn;
    }
    else if (calcCDValueBtn != null){
        calcCDValueBtn.onclick = onCalculateCDValueBtn;
        resetCDBtn.onclick = onResetCDBtn;
    }
    else if(calcPresentValueBtn != null){
        calcPresentValueBtn.onclick = onCalculatePresentValueBtn;
        resetPVBtn.onclick = onResetPVBtn;
    }

}

function onCalculateMortgageBtn(){
    let principalAmount = Number(document.getElementById("principalAmount").value);
    let interestRate = Number(document.getElementById("interestRate").value);
    let loanLength = Number(document.getElementById("loanLength").value);
    // monthly rate
    interestRate = (interestRate*0.01)/12;
    // years to months
    loanLength = loanLength*12;

    let resultMonthly = ((principalAmount*interestRate)*Math.pow((1+interestRate), loanLength))/(Math.pow((1+interestRate), loanLength)-1);
    document.getElementById("monthlyPay").value = resultMonthly.toFixed(2);
    let resultTotalInt = (resultMonthly*loanLength) - principalAmount;
    document.getElementById("totalInterest").value = resultTotalInt.toFixed(2);

}

function onResetMortgageBtn(){
    document.getElementById("principalAmount").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("loanLength").value = "";
    document.getElementById("monthlyPay").value = "";
    document.getElementById("totalInterest").value = "";
}

function onCalculateCDValueBtn(){
    let depositAmount = Number(document.getElementById("depositAmount").value);
    let interestCDRate = Number(document.getElementById("interestCDRate").value);
    let termCDLength = Number(document.getElementById("termCDLength").value);
    interestCDRate = interestCDRate * 0.01;

    let resultCDValue = depositAmount * (1+interestCDRate/365) ** (365 * termCDLength);
    document.getElementById("futureValue").value = resultCDValue.toFixed(2);
    let resulTotalInterest = resultCDValue - depositAmount;
    document.getElementById("totalInterestEarned").value = resulTotalInterest.toFixed(2);
}

function onResetCDBtn(){
    document.getElementById("depositAmount").value = "";
    document.getElementById("interestCDRate").value = "";
    document.getElementById("termCDLength").value = "";
    document.getElementById("futureValue").value = "";
    document.getElementById("totalInterestEarned").value = "";
}

function onCalculatePresentValueBtn(){
    let paymentAmount = Number(document.getElementById("paymentAmount").value);
    let interestPVRate = Number(document.getElementById("interestPVRate").value);
    let numYears = Number(document.getElementById("numYears").value);
    interestPVRate = (interestPVRate * 0.01)/12;
    let termPay = numYears*12;

    let resultPVAmount = paymentAmount*((1-(1+interestPVRate)**-termPay)/interestPVRate);
    document.getElementById("presentValue").value = resultPVAmount.toFixed(2);
    // alert("Hello");
}

function onResetPVBtn(){
    document.getElementById("paymentAmount").value = "";
    document.getElementById("interestPVRate").value = "";
    document.getElementById("numYears").value = "";
    document.getElementById("presentValue").value = "";
}
