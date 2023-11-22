if (typeof window !== 'undefined') {
    const body = document.querySelector(".body")
    console.log(body)
    const numberButtons = document.createElement("div")
    numberButtons.className = "number-buttons"
    const calculator = document.createElement("div")
    calculator.className = "calculator"
   
    if (body !== null){
        body.append(calculator)
    }

    const numbers = ["AC", "+/-", "%", "/", "7", "8", "9","X", "4", "5", "6","-", "1", "2", "3","+", "0", ".",   "="]

    const buttons = CreateDivArr(numbers)

    buttons.forEach(button => numberButtons.append(button))

    body?.append(numberButtons)

    function CreateDivArr(arr: string[]): HTMLElement[]{
        const divArr: HTMLElement[] = []
        arr.forEach((n) => {
            let div = document.createElement("div")
            if(div !== null){
                div.className = "num-button"
                div.textContent = n.toString()
                div.addEventListener("click", (e) => {
                    console.log(e.target)
                })
            }
            if(isNaN(Number(n)) && !["AC", "+/-", "%", "."].includes(n.toString())){
                div.style.backgroundColor = 'orange'
            }else if(["AC", "+/-", "%"].includes(n.toString())){
                div.style.backgroundColor = "#4d4238"
            }else if (n === "0"){
                div.style.backgroundColor = "gray"
                div.style.gridColumn = "span 2"
                div.style.width = "125px"
            }else{
                div.style.backgroundColor = "gray"
            }
            divArr.push(div)
        })
        return divArr  
    }
}