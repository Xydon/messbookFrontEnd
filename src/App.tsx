import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import StudentAdd from './AdminScreens/StudentAdd/StudentAdd';
import Student from './AdminScreens/Student/Student';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Student/>}/>
      <Route path={'/studentAdd'} element={<StudentAdd/>}/>
    </Routes>
  );
}

export default App;
