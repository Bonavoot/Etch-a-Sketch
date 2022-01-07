const container = document.querySelector(".container");
let cell;





function makeGrid() {

    let gridSize = prompt("Please enter grid size", 16);

    for (let i = 0; i < gridSize; i++) {

        const gridRow = document.createElement('div');
        gridRow.classList.add("gridRow");
        container.appendChild(gridRow);


        for (let j = 0; j < gridSize; j++) {

            const gridColumn = document.createElement('div');
            gridColumn.classList.add("gridColumn");
            gridRow.appendChild(gridColumn);
            gridColumn.addEventListener("mouseover", () => {
                gridColumn.style.backgroundColor = 'black';
            });
        }
    }
}



// reset button 

const reset = document.querySelector('.clear');
reset.addEventListener('click', function () {
    window.location.reload();
})


makeGrid();
