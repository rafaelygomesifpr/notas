function adicionarNota() {
  var texto = document.getElementById('textoNota').value;
  var tipo = document.querySelector('input[name="tipo"]:checked').value;
  let corIndex = 0;
  const coresBorda = ['#2196F3', '#4CAF50', '#9C27B0']; 
 

  if (texto === "") {
    alert("Digite algo antes de adicionar!");
    return;
  }

  var novaNota = document.createElement('div');
  novaNota.classList.add('nota', tipo);
  novaNota.innerHTML = texto + 
    ' <button onclick="this.parentElement.remove()">Remover</button>';

 
  if (tipo === "urgente") {
    document.getElementById('box1').appendChild(novaNota);
  } else {
    document.getElementById('box2').appendChild(novaNota);
  }
  novaNota.style.borderLeft = `6px solid ${coresBorda[corIndex % coresBorda.length]}`;
  corIndex++;
  document.getElementById('textoNota').value = "";
}
   novaNota.style.borderLeft = `6px solid ${coresBorda[corIndex % coresBorda.length]}`;
  corIndex++;
  
function apagarTudo() {
  document.getElementById('box1').innerHTML = "";
  document.getElementById('box2').innerHTML = "";
}

