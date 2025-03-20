function createTable(size) {
    const table = document.createElement("table");
    for (let i = 1; i <= size; i++) {
        const row = document.createElement("tr");
        for (let j = 1; j <= size; j++) {
            const cell = document.createElement("td");
            cell.textContent = i * j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

document.querySelector("#buttonCreate").addEventListener("click", () => {
    createTable(10);
});