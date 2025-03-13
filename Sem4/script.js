// Фейковые данные пользователей
const users = [
    { id: 1, name: "John Doe", age: 25, email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 30, email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", age: 28, email: "alice.johnson@example.com" },
];

// Функция для получения данных о пользователе
async function getUserData(userId) {
    // Ищем пользователя в фейковом массиве
    const user = users.find(u => u.id === userId);

    if (!user) {
        return Promise.reject(`Пользователь с ID ${userId} не найден.`);
    }

    return user; // Возвращаем данные о пользователе
}

// Пример использования функции
document.getElementById('getUser Button').addEventListener('click', () => {
    const userId = 2; // Можно взять ID из поля ввода, если нужно
    getUserData(userId)
        .then(data => console.log(data))
        .catch(error => console.error(error));
});

// Функция для отправки данных на сервер
async function saveUserData(userData) {
    // Здесь мы просто имитируем сохранение данных, добавляя их в массив
    users.push(userData); // Добавляем нового пользователя в массив
    console.log("Данные о пользователе успешно сохранены:", userData);
    return Promise.resolve();
}

// Пример использования функции
document.getElementById('saveUser Button').addEventListener('click', () => {
    const user = {
        id: users.length + 1, // Генерируем новый ID
        name: "John Smith",
        age: 30,
        email: "john@example.com",
    };

    saveUserData(user)
        .then(() => console.log("User  data saved successfully"))
        .catch(error => console.error(error));
});

// Функция для изменения стиля элемента с задержкой
function changeStyleDelayed(id, delay) {
    const element = document.getElementById(id);

    if (!element) {
        console.error(`Элемент с id "${id}" не найден.`);
        return;
    }

    setTimeout(() => {
        element.style.backgroundColor = "lightblue";
        element.style.color = "white";
        element.style.fontSize = "20px";
    }, delay);
}

// Пример использования функции
changeStyleDelayed("myElement", 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'
