import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const RemoteProductHero = React.lazy(
  () => import('remote-product-hero/Module')
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote-product-hero">RemoteProductHero</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host-app" />} />
        <Route path="/remote-product-hero" element={<RemoteProductHero />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
