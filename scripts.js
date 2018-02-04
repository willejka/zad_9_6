//scripts.js
    var add = document.getElementById('addElem');
    var list = document.getElementById('list');
    var listLength = 0;

    add.addEventListener('click', function() {
        listLength++;
        var element = document.createElement('li');
        element.innerHTML = 'item ' + listLength;
        list.appendChild(element);
    });
