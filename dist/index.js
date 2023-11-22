"use strict";
if (typeof window !== 'undefined') {
    const body = document.querySelector(".body");
    console.log(body);
    const numberButtons = document.createElement("div");
    numberButtons.className = "number-buttons";
    const calculator = document.createElement("div");
    calculator.className = "calculator";
    calculator.textContent = "Enter Numbers";
    if (body !== null) {
        body.append(calculator);
    }
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+", "-", "X", "/", "="];
    const buttons = CreateDivArr(numbers);
    buttons.forEach(button => numberButtons.append(button));
    body === null || body === void 0 ? void 0 : body.append(numberButtons);
    function CreateDivArr(arr) {
        const divArr = [];
        arr.forEach((n) => {
            let div = document.createElement("div");
            if (div !== null) {
                div.textContent = n.toString();
            }
            divArr.push(div);
        });
        return divArr;
    }
}
