document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('link').addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращаем стандартное действие ссылки
    chrome.tabs.create({ url: event.target.href }); // Открываем новую вкладку с указанной ссылкой
  });
});
