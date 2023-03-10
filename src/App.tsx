import React, { useState } from 'react';

import Header from './components/header/index';
import Game from './components/game/index';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

export default function App() {

  const [theme, setTheme] = useState(light);
  const [points, setPoints] = useState(0);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header points={points} toggleTheme={toggleTheme}/>
        <Game points={points}/>
      </div>
    </ThemeProvider>
  )
}
