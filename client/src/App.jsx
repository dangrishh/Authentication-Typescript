import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/registration';
import Login from './components/login';
import DashboardStudent from './components/pages/student/DashboardStudent';
import DashboardAdviser from './components/pages/adviser/DashboardAdviser';
import DashboardPanelist from './components/pages/panelist/DashboardPanelist';

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard-student" element={<DashboardStudent />} />
      <Route path="/dashboard-adviser" element={<DashboardAdviser />} />
      <Route path="/dashboard-panelist" element={<DashboardPanelist />} />
    </Routes>
  );
};

export default App;