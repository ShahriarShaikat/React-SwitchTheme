// import './assets/css/dark.css';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/Global.styles';
import Tutorial from './components/Tutorial';

//const myContext = React.createContext();

export default function App() {
    const [theme,setTheme] = useState('dark');
    const changeTheme = (target) =>{
        target === 'light' ? 
            setTheme('light') : 
                setTheme('dark') ;
    }
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={{currentTheme:theme,themeEvent:changeTheme}}>
                <Tutorial />
            </ThemeProvider>
        </>
    );
}
