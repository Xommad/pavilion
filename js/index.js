var moneyamount = localStorage.getItem("moneyAmount");

function job() {
    var count = document.getElementById('money-amount');

    moneyamount++
    count.textContent = "Money: " + moneyamount.toString() + "$";

    localStorage.setItem("momeyAmount", moneyamount);
    console.log(localStorage)
}

function updateWallet() {
    document.getElementById("money-amount").innerHTML = "Money: " + moneyamount + "$";
};

function openNewspaper() {
    window.open('newspaper.html');
}   

function goBackN() {
    window.open('index.html');
}   
