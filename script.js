const API_URL_CURRENCIES = 'https://api.exchangerate-api.com/v4/latest/USD'; 

let conversionRates = {};

document.addEventListener('DOMContentLoaded', () => {
    fetchConversionRates();
});

function fetchConversionRates() {
    fetch(API_URL_CURRENCIES)
        .then(response => response.json())
        .then(data => {
            conversionRates = data.rates;
            convertCurrency(); 
        })
        .catch(error => console.error('Error fetching conversion rates:', error));
}

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultElement = document.getElementById('result');

    if (!isNaN(amount) && fromCurrency && toCurrency) {
        const fromRate = conversionRates[fromCurrency] || 1;
        const toRate = conversionRates[toCurrency] || 1;
        const conversionRate = toRate / fromRate;

        if (conversionRate) {
            const convertedAmount = amount * conversionRate;
            resultElement.textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
        } else {
            resultElement.textContent = 'Conversion rate not available';
        }
    } else {
        resultElement.textContent = '';
    }
}
