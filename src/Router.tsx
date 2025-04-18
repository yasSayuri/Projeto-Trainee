import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Login } from './pages/login';
import { Cadastro } from './pages/cadastro';

export function Router() {
  return (
    <Routes> 
      <Route path="/" element={<Login />}></Route>
      <Route path='/cadastro' element={<Cadastro />}></Route>
    </Routes>
  )
}
