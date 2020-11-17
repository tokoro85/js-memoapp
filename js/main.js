var SERVICE_NAME = 'SERVICE_NAME';
var storage = null;

function save() {
  var title = document.getElementById('title').value;
  var value = document.getElementById('value').value;

  if (title && value) {
    storage[title] = value;
  }

  alert("保存しました");
}

function show() {
  window.onload = function() {
    try {
      storage = JSON.parse(localStorage[SERVICE_NAME] || '{}');
    } catch(e) {
      storage = {};
    }

    var listElement = document.getElementById('list');

    for (var title in storage) {
      var trElement = document.createElement('tr');
      var titletElement = document.createElement('td');
      titletElement.textContent = title;
      var valueElement = document.createElement('td');
      valueElement.textContent = storage[title];

      listElement.appendChild(trElement);
      trElement.appendChild(titletElement);
      trElement.appendChild(valueElement);
    }
  }
}