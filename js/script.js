  const coresBorda = ['#1066d6ff', '#4CAF50', '#9C27B0'];
  corIndex = 0;
  function adicionarNota() {
  var texto = document.getElementById('textoNota').value;
  var tipo = document.querySelector('input[name="tipo"]:checked').value;
  
  if (texto === "") {
    alert("Digite algo antes de adicionar!");
    return;
  }

  var novaNota = document.createElement('div');
  novaNota.classList.add('nota', tipo);
  novaNota.innerHTML = texto + 
    ' <button onclick="this.parentElement.remove()">Remover</button>';

 
  if (tipo === "urgente") {
    document.getElementById('listaurgente').appendChild(novaNota);
  } else {
    document.getElementById('listanurgente').appendChild(novaNota);
  }
  
  novaNota.style.borderLeft = `6px solid ${coresBorda[corIndex % coresBorda.length]}`;
  corIndex++;
  document.getElementById('textoNota').value = "";
  }
  
 

  function apagarTudo() {
  document.getElementById('listaurgente').innerHTML = "";
  document.getElementById('listanurgente').innerHTML = "";
  }
