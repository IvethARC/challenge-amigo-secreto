const nameList = [];
drawDone = false;

function formatName(name) {
 if (!name || typeof name !== 'string') {
  alert("⚠️ Por favor, ingresa un nombre válido");
  return null;
 }
 if(name.length < 2){
  alert('📝 El nombre debe tener al menos 2 caracteres');
  return null
 }
 name = name.trim();
 return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function agregarAmigo() {
 if (drawDone){
  alert("🎯 El sorteo ya se realizó. Reinicia para agregar más nombres.");
  return;
 }
 const input = document.getElementById("amigo");
 const friendName = formatName(input.value);
 const mensajeVacio = document.getElementById("mensajeVacio");
 const listName = document.createElement("li");

 if (!friendName) return;

 if (nameList.includes(friendName)) {
  alert("📌 Este nombre ya fue agregado.");
  return;
}

 nameList.push(friendName);
 listName.textContent = friendName;
 listaAmigos.appendChild(listName);

input.value = "";
mensajeVacio.style.display = "none";
}

function emptyList() {
 const listFull = document.getElementById("listaAmigos");
 const mensajeVacio = document.getElementById("mensajeVacio");

 if (listFull.children.length === 0) {
     mensajeVacio.style.display = "block";
 }
}


function sortearAmigo() {
 if (nameList.length === 0) {
     alert("💡 Debe haber al menos un nombre en la lista para realizar el sorteo.");
     return;
 }

 const aleatoryIndex = Math.floor(Math.random() * nameList.length);
 const amigoSecreto = nameList[aleatoryIndex];

 resultado.innerHTML = ""; 

 const resultItem = document.createElement("li");
 resultItem.classList.add("resultado-item");
 resultItem.textContent = `🎉 ¡Su amigo secreto es: ${amigoSecreto}! 🎉`;
 
 resultado.appendChild(resultItem);
 drawDone = true;
}

function resetDraw() {
 alert("🔄 Sorteo reiniciado.");
 document.getElementById("amigo").value = "";
 nameList.length = 0;
 document.getElementById("listaAmigos").innerHTML = "";
 document.getElementById("resultado").innerHTML = "";
 document.getElementById("mensajeVacio").style.display = "block";
 drawDone = false;
}