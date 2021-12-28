const container = document.querySelector(".gridContainer");


function makeGrid() {

    for (let i = 0; i < 16; i++) {

        const gridRow = document.createElement('div');
        gridRow.classList.add("gridRow");
        container.appendChild(gridRow);

        for (let j = 0; j < 16; j++) {

            const gridColumn = document.createElement('div');
            gridColumn.classList.add("gridColumn");
            gridRow.appendChild(gridColumn);
        }
    }
}

let color = ["#3C9EE7", "E7993C"];

document.querySelectorAll(".gridRow").forEach((item, i) => {
    let mouseOverFunc = function () {
        this.style.background =
            color[Math.floor(Math.random() * color.length)];
    };
    item.onmouseover = mouseOverFunc;
})

document.querySelectorAll(".gridColumn").forEach((item, i) => {
    let mouseOverFunc = function () {
        this.style.background =
            color[Math.floor(Math.random() * color.length)];
    };
    item.onmouseover = mouseOverFunc;
})


makeGrid();
