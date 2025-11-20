import { Suspense, useState, useEffect } from 'react';
import Scene from './components/Canvas/Scene';
import Overlay from './components/UI/Overlay';
import Navigation from './components/UI/Navigation';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative">
      {/* Static gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none" />

      {/* Navigation */}
      <Navigation />

      <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-primary font-mono">Loading System...</div>}>
        {!isMobile ? (
          <Scene>
            <Overlay />
          </Scene>
        ) : (
          <div className="relative z-10 w-full h-screen overflow-y-auto">
            <Overlay />
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default App;
