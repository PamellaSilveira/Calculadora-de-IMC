

const btn = document.querySelector('.btn');
const resultado = document.querySelector('#resultado');

btn.addEventListener('click', () => {

  const peso = Number(document.getElementById('peso').value);
  const altura = Number(document.getElementById('altura').value);

  // VALIDAÇÃO
  if (peso <= 0 && altura <= 0) {
    resultado.textContent = 'Preencha peso e altura corretamente';
    return;
  }
  else if (peso <= 0) {
    resultado.textContent = 'Preencha o campo peso';
    return;
  }
  else if (altura <= 0) {
    resultado.textContent = 'Preencha o campo altura';
    return;
  }

  // CÁLCULO IMC
  const imc = peso / Math.pow(altura, 2);
  const imcFinal = imc.toFixed(2);

  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  }
  else if (imc < 25) {
    classificacao = 'Peso normal';
  }
  else if (imc < 30) {
    classificacao = 'Excesso de peso';
  }
  else if (imc < 35) {
    classificacao = 'Obesidade classe I';
  }
  else if (imc < 40) {
    classificacao = 'Obesidade classe II';
  }
  else {
    classificacao = 'Obesidade classe III';
  }

  resultado.textContent = `Seu IMC é ${imcFinal} (${classificacao})`;
});
