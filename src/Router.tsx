import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Login } from './pages/login';
import { Cadastro } from './pages/cadastro';
import { Web } from './pages/web';

interface RouterProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

export function Router({ toggleTheme, currentTheme }: RouterProps) {
  return (
    <Routes> 
      <Route path="/" element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/web' element={<Web />} />
    </Routes>
  );
}