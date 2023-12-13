# Rick Roll Tabs Chrome Extension

![ScreenShot]([https://github.com/aziza810/extension/blob/main/Снимок%20экрана%202023-12-13%20в%2018.21.30.png]())
Это Chrome-расширение, которое изменяет заголовок вкладки на случайную строку из песни "Never Gonna Give You Up" и устанавливает изображение рикролла в качестве фона страницы при загрузке.

## Использование

### Установка

1. Клонируйте репозиторий или скачайте файлы расширения.
2. Откройте браузер Chrome и перейдите на страницу `chrome://extensions/`.
3. Включите "Режим разработчика" (Developer Mode).
4. Нажмите на кнопку "Загрузить распакованное расширение" и выберите папку с файлами расширения.

### Структура файлов

- `manifest.json` - файл манифеста, описывающий расширение.
- `background.js` - фоновый скрипт, отвечающий за изменение заголовка вкладки.
- `contentScript.js` - скрипт контента, выполняющий изменения на странице.
- `popup.html` - всплывающее окно (popup) для расширения.
- `images/` - папка с изображениями для иконок расширения.

### Video:https:[Watch the video](https://drive.google.com/file/d/1L-CZYrP7jH9AO_eDLH8nlHr1c0_7PpEU/view?usp=sharing)

### Редактирование функциональности

1. В `background.js` и `contentScript.js` вы можете изменить текст песни, добавив или удалив строки из переменной `lyrics`.
2. Чтобы использовать изображение рикролла вместо цвета, в `contentScript.js` измените функцию `setBackgroundImage()` на приведенную ниже.

```javascript
// Установка изображения в качестве фона
function setBackgroundImage() {
  const imageUrl = 'https://cdn.vox-cdn.com/thumbor/WR9hE8wvdM4hfHysXitls9_bCZI=/0x0:1192x795/1400x1400/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg';
  document.body.style.backgroundImage = `url('${imageUrl}')`;
}
