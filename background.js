
chrome.contextMenus.create({
  id: "searchOnCifraClub",
  title: "Buscar no Cifra Club: %s",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "searchOnCifraClub") {
    var selectionText = info.selectionText;
    var searchUrl = "https://www.cifraclub.com.br/?q=" + encodeURIComponent(selectionText);
    chrome.tabs.create({ url: searchUrl });
  }
});