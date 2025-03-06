import * as React from 'react';
import {createRoot} from 'react-dom/client';

export default function App() {
  return (
      <h1>Hello World</h1>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<App />);
}
