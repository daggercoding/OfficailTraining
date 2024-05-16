function calculate() {
    let principle = parseFloat(document.getElementById('principle').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let period = parseFloat(document.getElementById('period').value);
    let compoundInterest = (principle * (1 + rate / 100) ** period) - principle;

    let result = document.getElementById('result');
    if (principle > 10000) {
        result.style.color = 'red';
    } else {
        result.style.color = 'blue';
    }
    result.textContent = "Compound Interest: $" + compoundInterest.toFixed(2);
}

function clearInputs() {
    document.getElementById('principle').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('period').value = '';
    document.getElementById('result').textContent = '';
}