var moneyamount = localStorage.getItem("moneyAmount");

function job() {
    var count = document.getElementById('money-amount');

    moneyamount++
    count.textContent = "Money: " + moneyamount.toString() + "$";

    localStorage.setItem("momeyAmount", moneyamount);
    console.log(localStorage)
};

function uber() {
    var count = document.getElementById('money-amount');
    var salary = [
        5, 6, 7, 8, 9, 10, 15, 20
    ];
    var randomsalary = salary[Math.floor(Math.random() * salary.length)]

    moneyamount += randomsalary;
    count.textContent = "Money: " + moneyamount.toString() + "$";

    localStorage.setItem("momeyAmount", moneyamount);
    console.log(localStorage)
}

function helpneighbors() {
    var count = document.getElementById('money-amount');
    var salary = [
        5, 6, 7, 8, 9, 10, 15, 20
    ];
    var randomsalary = salary[Math.floor(Math.random() * salary.length)]

    moneyamount += randomsalary;
    count.textContent = "Money: " + moneyamount.toString() + "$";

    localStorage.setItem("momeyAmount", moneyamount);
    console.log(localStorage)
}


function sellflyers() {
    var count = document.getElementById('money-amount');
    var salary = [
        5, 6, 7, 8, 9, 10, 15, 20, 50
    ];
    var randomsalary = salary[Math.floor(Math.random() * salary.length)]

    moneyamount += randomsalary;
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
 