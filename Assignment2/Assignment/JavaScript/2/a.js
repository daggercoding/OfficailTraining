let output = '';
for (let i = 0; i < 100; i++) {
    if (i % 10 === 0 && i !== 0) {
        output += '<br>';
    }
    output += i + '  ';   
}
document.write(output)