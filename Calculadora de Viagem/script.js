function calculateTrip() {
    const tripName = document.getElementById("trip-name").value;
    const distance = parseFloat(document.getElementById("distance").value);
    const fuelUsed = parseFloat(document.getElementById("fuel-used").value);
    const fuelPrice = parseFloat(document.getElementById("fuel-price").value);

    const autonomy = distance / fuelUsed;
    const tripCost = fuelUsed * fuelPrice;
    const costPerKm = tripCost / distance;

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h2>Resultado da viagem: ${tripName}</h2>
        <p>Autonomia: ${autonomy.toFixed(2)} km/l</p>
        <p>Valor da viagem: R$ ${tripCost.toFixed(2)}</p>
        <p>Valor por quilômetro: R$ ${costPerKm.toFixed(2)}</p>
    `;
}
