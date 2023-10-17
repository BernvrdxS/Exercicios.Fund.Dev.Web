function calculateIMC() {
    const name = document.getElementById("name").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    const imc = weight / (height * height);

    let classification = '';
    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classification = 'Peso normal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        classification = 'Pré-obesidade';
    } else if (imc >= 30.0 && imc <= 34.9) {
        classification = 'Obesidade Grau 1';
    } else if (imc >= 35.0 && imc <= 39.9) {
        classification = 'Obesidade Grau 2';
    } else {
        classification = 'Obesidade Grau 3';
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h2>Resultado para ${name}</h2>
        <p>Seu IMC é: ${imc.toFixed(2)}</p>
        <p>Classificação: ${classification}</p>
    `;
}