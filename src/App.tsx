import React, { useState, useEffect } from 'react';
import InitAnimation from './components/InitAnimation';
import RetroDesktop from './components/RetroDesktop';

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0208] text-[#00ff41] overflow-hidden">
      {!isInitialized ? (
        <InitAnimation />
      ) : (
        <RetroDesktop />
      )}
    </div>
  );
}

export default App;