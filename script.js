function generateTable() {
    const number = parseInt(document.getElementById("number").value);
    const range = parseInt(document.getElementById("range").value);
    const showAll = document.getElementById("show-all").checked;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = '';

    for (let i = 1; i <= number; i++) {
        const table = document.createElement('table');
        table.innerHTML = `<caption>Tabuada do ${i} até ${range}</caption>`;
        for (let j = 1; j <= range; j++) {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.innerHTML = `${j}`;
            cell2.innerHTML = `${i * j}`;
        }
        resultsDiv.appendChild(table);
    }
}