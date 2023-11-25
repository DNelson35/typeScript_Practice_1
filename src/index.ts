if (typeof window !== 'undefined') {
   const body: HTMLElement | null = document.querySelector(".body");
   const numberButtons: HTMLDivElement = document.createElement("div");
   numberButtons.className = "number-buttons";

   const calculator: HTMLDivElement = document.createElement("div");
   calculator.className = "calculator";

   const form: HTMLFormElement = document.createElement('form');
   const input: HTMLInputElement = document.createElement('input');
   form.className = "form";
   input.className = "input";

   numberButtons.appendChild(form);
   form.style.gridColumn = 'span 4';
   form.appendChild(input);

   if (body !== null){
       body.append(calculator);
   }

   const numbers: string[] = ["AC", "+/-", "%", "/", "7", "8", "9","*", "4", "5", "6","-", "1", "2", "3","+", "0", ".", "="];

   const buttons: HTMLDivElement[] = createDivArr(numbers);

   buttons.forEach(button => numberButtons.append(button));

   body?.append(numberButtons);

   function createDivArr(arr: string[]): HTMLDivElement[]{
       return arr.map(n => {
           const div: HTMLDivElement = document.createElement("div");
           div.className = "num-button";
           div.textContent = n.toString();
           div.addEventListener("click", handleButtonClick);

           if(isNaN(Number(n)) && !["AC", "+/-", "%", "."].includes(n.toString())){
               div.style.backgroundColor = 'orange';
           }else if(["AC", "+/-", "%"].includes(n.toString())){
               div.style.backgroundColor = "#4d4238";
           }else if (n === "0"){
               div.style.backgroundColor = "gray";
               div.style.gridColumn = "span 2";
               div.style.width = "125px";
           }else{
               div.style.backgroundColor = "gray";
           }
           return div;
       });
   }

   let expression = "";

   function handleButtonClick(e: Event) {
      const target = e.target as HTMLElement;
      const value = target.textContent;
      if (value !== null) {
          if (!isNaN(Number(value))) {
              expression += value;
          } else if (["+", "-", "*", "/"].includes(value)) {
              expression += value;
          } else if (value === ".") {
              if (!expression.includes(".")) {
                  expression += value;
              }
          } else if (value === "=") {
              let result: number = eval(expression);
              expression = result.toString();
          } else if (value === "AC") {
              expression = "";
          } else if (value === "+/-") {
              expression = (-Number(expression)).toString();
          } else if (value === "%") {
              expression = (Number(expression) / 100).toString();
          }
          input.value = expression;
      }
   }
}
