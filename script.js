function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let convertedTemperature;
    let unitName;

    if (isNaN(temperature)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    if (unit === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        unitName = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        unitName = 'Celsius';
    } else if (unit === 'kelvin') {
        convertedTemperature = temperature + 273.15;
        unitName = 'Kelvin';
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unitName}`;
    resultElement.classList.add('show'); // Add class to show result

    const buttonHeight = document.querySelector('button').offsetHeight;
    const resultHeight = resultElement.offsetHeight;
    resultElement.style.top = `calc(100% + ${buttonHeight}px + 10px)`; 

    setTimeout(() => {
        document.getElementById('temperature').value = '';
        resultElement.innerText = '';
        resultElement.classList.remove('show'); 
    }, 5000);
}
