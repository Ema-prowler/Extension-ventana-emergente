// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extensión instalada.');
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "open_popup") {
      // Realiza alguna acción antes de abrir la ventana emergente
      console.log("Abriendo la ventana emergente con el video de YouTube:", request.videoURL);
  
      // Abre una nueva ventana emergente con la URL del video
      chrome.windows.create({
        url: request.videoURL,
        type: "popup",
        width: 600,
        height: 400
      });
    }
  });
  