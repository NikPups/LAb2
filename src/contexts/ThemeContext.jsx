import React, { createContext, useState } from 'react';

// Создаём контекст для темы
export const ThemeContext = createContext();

// Создаём провайдер для темы
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Функция для переключения темы
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};