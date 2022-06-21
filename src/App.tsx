import React from 'react';
import { Header } from './components/Header';
import { Resume } from './components/Resume';
import { GlobalStyles } from './styles/GlobalStyles';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Header />
    <Resume />
  </>
);

export { App };
