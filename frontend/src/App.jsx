// src/App.js

import React from 'react';
import LoginScreen from './components/LoginScreen.jsx';
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  return (
    <div>
      <LoginScreen />
      <DashboardPage />
    </div>
  );
}

export default App;