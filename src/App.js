import React, { Suspense } from 'react';
import './App.css';
import ModelViewer from './pages/ModelViewer';

function App() {
  return (
    <Suspense fallback={null}>
      <ModelViewer />
    </Suspense>
  );
}

export default App;
