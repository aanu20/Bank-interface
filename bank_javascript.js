import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, update,onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appsettings = {
    databaseURL: "https://bankmanagement-3fd98-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appsettings);
const db = getDatabase(app);

let button_balance = document.querySelector("#button_balance");
let balance = 0;

button_balance.addEventListener("click", function() {
    let account = document.querySelector("#account").value.trim();
    let phoneinput = document.querySelector("#phone").value.trim();

    if (account === "" || phoneinput === "") {
        alert("Please enter all required data.");
        return;
    }

    const accRef = ref(db, 'accounts/' + account);

    push(accRef, {
        accountNumber: account,
        phoneNumber: phoneinput,
        balanceAmount: balance
    });

    let retrive = `Account number: ${account}\nBalance: ${balance}`;
    alert(retrive);
});

let depositButton = document.querySelector(".depositButtonhtml");
depositButton.addEventListener("click", depositAmount);

function depositAmount() {
    let depositContainer = document.querySelector(".depositAmount");
    depositContainer.innerHTML = "<input class='deposit' type='text' placeholder='Enter Amount'>";

    let depositAmountInput = document.querySelector(".deposit");
    styleDepositInput(depositAmountInput);

    depositAmountInput.addEventListener('pointerout', function() {
        amountDeposit(depositAmountInput.value);
    });
}

function styleDepositInput(inputElement) {
    inputElement.style.position = "absolute";
    inputElement.style.left = "46%";
    inputElement.style.borderRadius = "10px";
    inputElement.style.padding = "5px";
    inputElement.style.textAlign = "center";
    inputElement.style.top = "430px";
    inputElement.style.color = "black";
}

function amountDeposit(custDeposit) {
    let account = document.querySelector("#account").value.trim();
    let phoneinput = document.querySelector("#phone").value.trim();

    if (isNaN(custDeposit) || custDeposit <= 0) {
        alert("Please enter a valid deposit amount.");
        return;
    }

    const acc = ref(db, 'depoisted/' + account);
    let value;
    onValue(acc,function(snapshot){
       value=Object.values(snapshot.val())
       console.log(value.toString());
    });
    let amount=value;
    update(acc, {
        balanceAmount: parseFloat(custDeposit) + parseFloat(amount)
    });

    let depositContain = document.querySelector(".depositAmount");
    depositContain.innerHTML = "<p class='instr'>Enter the amount and move the cursor >></p>";

    styleInstruction(depositContain.querySelector(".instr"));

    depositContain.innerHTML += "<button class='depositButton'>Done</button>";
    console.log("Deposited!");

    let depositEnterButton = document.querySelector(".depositButton");
    styleDepositButton(depositEnterButton);
}

function styleInstruction(instructionElement) {
    instructionElement.style.position = "absolute";
    instructionElement.style.left = "46%";
    instructionElement.style.borderRadius = "10px";
    instructionElement.style.padding = "5px";
    instructionElement.style.textAlign = "center";
    instructionElement.style.top = "470px";
    instructionElement.style.color = "black";
}

function styleDepositButton(buttonElement) {
    buttonElement.style.position = "absolute";
    buttonElement.style.left = "48.5%";
    buttonElement.style.top = "430px";
    buttonElement.style.width = "90px";
    buttonElement.style.borderRadius = "10px";
    buttonElement.style.padding = "7px";
    buttonElement.style.textAlign = "center";
    buttonElement.style.color = "black";
}


