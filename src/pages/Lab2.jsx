import React, { useState } from 'react';
import styles from './Lab2.module.css'; // Импортируем модульные стили

function Lab2() {
    const [count, setCount] = useState(0);

    // Функция для перезагрузки страницы
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className={styles.lab2Container}>
            <div className={styles.lab2Content}>
                {/* Навигация для Lab2 */}
                <nav className={styles.lab2Nav}>
                    <ul>
                        <li>
                            <button onClick={handleReload}>Home</button>
                        </li>
                        <li>
                            <button onClick={handleReload}>About</button>
                        </li>
                        <li>
                            <button onClick={handleReload}>Contact</button>
                        </li>
                    </ul>
                </nav>

                {/* Заголовок и счётчик */}
                <h1>Hello World!</h1>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Click on me!</button>
            </div>
        </div>
    );
}

export default Lab2;