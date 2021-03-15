module.exports = function reverse(n) {
    let b = 0;
    n = Math.abs(n);
    while (n > 0) {
        b += n % 10;
        b *= 10;
        n = Math.floor(n / 10);
    }
    b = Math.floor(b / 10);
    return (b);
}