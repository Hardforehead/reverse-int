module.exports = function reverse (n) {
    let a = '';
    n = Math.abs(n);
    while (n > 0) {
    a = a + (n % 10);
    n = parseInt(n / 10);
    }
    
    return a;
  }
