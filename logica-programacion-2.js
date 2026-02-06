function iniciarConversor() {
    let celsius;
    let input;

    while (true) {
        input = prompt("Ingresa la temperatura en grados Celsius:");

        if (input !== null && input.trim() !== "" && !isNaN(input)) {
            celsius = parseFloat(input);
            break; 
        } else {
            alert("Error: Por favor, ingresa un valor numérico válido.");
        }
    }

    // conversión
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;


    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(1)}`);
    
    
    document.body.innerHTML = `
        <h2>Resultados de la conversión:</h2>
        <p><strong>Grados Kelvin:</strong> ${kelvin.toFixed(2)}</p>
        <p><strong>Grados Fahrenheit:</strong> ${fahrenheit.toFixed(1)}</p>
    `;
}

iniciarConversor();