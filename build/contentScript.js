// Обработчик сообщений от фонового скрипта
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'updateTitleAndColor') {
    const selectedLyric = message.lyric;
    document.title = selectedLyric;
    document.body.style.backgroundColor = setBackgroundImage();
  }
});

function setBackgroundImage() {
  const imageUrl =
    'https://cdn.vox-cdn.com/thumbor/WR9hE8wvdM4hfHysXitls9_bCZI=/0x0:1192x795/1400x1400/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg';
  document.body.style.backgroundImage = `url('${imageUrl}')`;
}
