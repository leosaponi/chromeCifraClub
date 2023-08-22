// Cria uma entrada no menu de contexto
chrome.contextMenus.create({
    id: "searchOnCifraClub",
    title: "Buscar no Cifra Club: %s", // O %s indica onde o texto selecionado deve ser inserido
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "searchOnCifraClub") {
      // Obtém o texto selecionado
      var selectionText = info.selectionText;
  
      var searchUrl = "https://www.cifraclub.com.br/?q=" + encodeURIComponent(selectionText);
  
      chrome.tabs.create({ url: searchUrl });
    }
  });
  
