import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Login } from './pages/login';

export function Router() {
  return (
    <Routes> 
      <Route path="/" element={<Login />}></Route>
    </Routes>
  )
}
