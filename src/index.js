module.exports = function reverse (n) {
    n = String(n).replace(/(\B[-0]\b)/g,'');
  return Number(n.split("").reverse().join(''));
}
