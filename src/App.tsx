import { Suspense } from 'react';
import Scene from './components/Canvas/Scene';
import Overlay from './components/UI/Overlay';

function App() {
  return (
    <div className="w-full h-screen bg-background text-white">
      <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-primary font-mono">Loading System...</div>}>
        <Scene>
          <Overlay />
        </Scene>
      </Suspense>
    </div>
  );
}

export default App;
