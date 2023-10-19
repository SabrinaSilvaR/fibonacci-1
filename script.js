function fibonacci(n) {
  let fibo = [0, 1];
  while (fibo.length < n) {
    let num = fibo[fibo.length - 1] + fibo[fibo.length - 2];
    fibo.push(num);
  }
  return fibo;
}

function calcularFibonacci() {
  let num;
  while (true) {
    num = prompt("Ingrese un número");
    if (num === null) {
      alert("Debes ingresar un número");
    } else {
      num = parseFloat(num);
      if (isNaN(num)) {
        alert("Debes ingresar un número válido");
      } else {
        const resultFibo = fibonacci(num);
        alert("Resultado de Fibonacci: " + resultFibo.join(", "));
        break;
      }
    }
  }
}