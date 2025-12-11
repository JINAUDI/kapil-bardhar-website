import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// iOS Safari viewport height fix
// Handles URL bar collapse/expand which changes viewport height
function fixIOSViewport() {
  // Check if iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  
  if (isIOS) {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}

// Run on load and resize/orientation change
fixIOSViewport();
window.addEventListener('resize', fixIOSViewport);
window.addEventListener('orientationchange', () => {
  // Delay to allow Safari to finish orientation change
  setTimeout(fixIOSViewport, 100);
});

createRoot(document.getElementById("root")!).render(<App />);
