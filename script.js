const conversionRates = {
    USD: { USD: 1, EUR: 0.85, JPY: 110.49, GBP: 0.72, AUD: 1.34, AMD: 481.75 },
    EUR: { USD: 1.18, EUR: 1, JPY: 129.53, GBP: 0.85, AUD: 1.58, AMD: 568.76 },
    AMD: { USD: 0.0021, EUR: 0.0018, JPY: 0.23, GBP: 0.0015, AUD: 0.0028, AMD: 1 },
    JPY: { USD: 0.009, EUR: 0.0077, JPY: 1, GBP: 0.0066, AUD: 0.012, AMD: 4.39 },
    GBP: { USD: 1.39, EUR: 1.17, JPY: 151.96, GBP: 1, AUD: 1.86, AMD: 667.74 },
    AUD: { USD: 0.74, EUR: 0.63, JPY: 81.61, GBP: 0.54, AUD: 1, AMD: 359.12 },
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultElement = document.getElementById('result');

    if (!isNaN(amount) && fromCurrency && toCurrency) {
        const fromRate = conversionRates[fromCurrency][fromCurrency];
        const toRate = conversionRates[fromCurrency][toCurrency];
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
