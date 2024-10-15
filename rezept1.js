console.log()
const input = document.getElementById("people")

const button = document.getElementById("bn")

const table = document.getElementById("table-p")

const table1 = document.getElementById("table-p1")
const table2 = document.getElementById("table-p2")
const table3 = document.getElementById("table-p3")
const table4 = document.getElementById("table-p4")
const table5 = document.getElementById("table-p5")
const table6 = document.getElementById("table-p6")


function rechner() {

    number = input.value
    if (number < 0) {
        return;
    }
    table.innerText = (input.value) * 2 / 2;
    table1.innerText = (input.value) / 2;
    table2.innerText = (input.value) * 3 / 2;
    table3.innerText = (input.value) * 200 / 2;
    table4.innerText = (input.value) * 150 / 2;
    table5.innerText = (input.value) / 2;
    table6.innerText = (input.value) * 100 / 2;
}

button.addEventListener("click", rechner)


function burger() {
    var menu = document.getElementById("mobile");
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
