import React, { useState, useEffect, useRef } from 'react';

function Lab1({ onBack }) {
    const [counter, setCounter] = useState(0);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const isAlertShown = useRef(false); // Флаг для отслеживания показа alert

    useEffect(() => {
        if (!isAlertShown.current) { // Проверяем, был ли alert уже показан
            alert("Страница полностью загружена!");
            isAlertShown.current = true; // Устанавливаем флаг в true
        }

        const savedLogin = localStorage.getItem('login');
        const savedPassword = localStorage.getItem('password');
        if (savedLogin) setLogin(savedLogin);
        if (savedPassword) setPassword(savedPassword);
    }, []);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    const handleClearForm = () => {
        setLogin('');
        setPassword('');
        localStorage.removeItem('login');
        localStorage.removeItem('password');
        setMessage('Форма очищена.');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (login === 'admin' && password === 'admin') {
            setMessage('Успешная авторизация!');
            localStorage.setItem('login', login);
            localStorage.setItem('password', password);
        } else {
            setMessage('Ошибка: неверные учетные данные.');
        }
    };

    return (
        <div>
            <h1>Лабораторная работа 1</h1>

            {/* Счётчик */}
            <div>
                <button onClick={handleIncrement}>Увеличить</button>
                <button onClick={handleDecrement}>Уменьшить</button>
                <p>Счетчик: <span>{counter}</span></p>
            </div>

            {/* Форма авторизации */}
            <form onSubmit={handleSubmit}>
                <label>
                    Логин:
                    <input
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Пароль:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Войти</button>
                <button type="button" onClick={handleClearForm}>
                    Очистить
                </button>
            </form>

            {/* Сообщение */}
            <p>{message}</p>
        </div>
    );
}

export default Lab1;