// Obtener la selección actual
chrome.tabs.executeScript({
  code: "window.getSelection().toString();"
}, function(selection) {
  // Enviar la selección al contenido
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getSelection"}, function(response) {
      // Contar las palabras en la respuesta
      var count = response.data.split(" ").length;
      // Mostrar el resultado en el popup
      document.getElementById("word-count").innerHTML = "Número de palabras seleccionadas: " + count;
    });
    });
    });
    
    
