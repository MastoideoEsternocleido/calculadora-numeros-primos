function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  // Verificar si el número es divisible por algún número del 2 a la raíz cuadrada del número
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

function main() {
  const numeroIngresado = parseInt(prompt("Ingresa un número:"));

  if (esPrimo(numeroIngresado)) {
    console.log(numeroIngresado + " es un número primo.");
  } else {
    console.log(numeroIngresado + " NO es un número primo.");
  }
}

main();
