 const input = document.getElementById('taskInput');
 const addBtn = document.getElementById('addBtn');
 const list = document.getElementById('taskList');

 addBtn.addEventListener('click', () => {
     const text = input.value.trim();
     if (text === "") return; // Не добавлять пустые

     // 1. Создаем элемент списка (li)
     const li = document.createElement('li');

     // 2. Внутренняя структура (текст и кнопка)
     li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="delete-btn">Удалить</button>
    `;

     // Функция "Сделано": кликаем по тексту — задача зачеркивается
     li.querySelector('.task-text').addEventListener('click', function() {
         this.classList.toggle('completed');
     });

     // Функция "Удалить": кликаем по кнопке — элемент исчезает
     li.querySelector('.delete-btn').addEventListener('click', () => {
         li.remove();
     });

     // Добавляем готовую задачу в список
     list.appendChild(li);

     // Очищаем поле ввода
     input.value = "";
 });