import React, { PropsWithChildren } from 'react';
import './styles/main.css';

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
}

export default Main;