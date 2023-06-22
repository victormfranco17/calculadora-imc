const form = document.getElementById('bmi-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);
  const result = document.getElementById('result');
  
  if (weight === 0 || height === 0) {
    result.innerText = 'Por favor ingrese un valor válido';
    return;
  }
  
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
  
  result.innerText = `Su índice de masa corporal es ${bmi}`;
});
