// Cria uma entrada no menu de contexto
chrome.contextMenus.create({
    id: "searchOnCifraClub",
    title: "Buscar no Cifra Club: %s", // O %s indica onde o texto selecionado deve ser inserido
    contexts: ["selection"]
  });
  
  // Adiciona um listener para o evento de clique na entrada do menu de contexto
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "searchOnCifraClub") {
      // Obtém o texto selecionado
      var selectionText = info.selectionText;
  
      // Cria uma nova URL com o texto selecionado
      var searchUrl = "https://www.cifraclub.com.br/?q=" + encodeURIComponent(selectionText);
  
      // Abre a URL em uma nova aba
      chrome.tabs.create({ url: searchUrl });
    }
  });
  