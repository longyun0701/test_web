function randomAlphanumeric() {
    var alphanumeric = '0123456789abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for (var i = 32; i > 0; --i) result += alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
    // *** check duplicate ***
    // if result not in Id_from_csv:
    //   result = randomAlphanumeric();
    result = result.substring(0, 8) + '-' + result.substring(8, 12) + '-' + result.substring(12, 16) + '-' + result.substring(16, 20) + '-' + result.substring(20, 32);
    // *** add result to the matrix read from csv ***
    return result;
}