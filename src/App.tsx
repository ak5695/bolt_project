import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { EffectDetail } from './pages/EffectDetail';
import { ConnectionAlert } from './components/ui/ConnectionAlert';
import { useSupabase } from './hooks/useSupabase';

function App() {
  const { isConfigured } = useSupabase();

  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/effect/:id" element={<EffectDetail />} />
            </Routes>
            {!isConfigured && <ConnectionAlert />}
          </div>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App; // 确保这里有默认导出