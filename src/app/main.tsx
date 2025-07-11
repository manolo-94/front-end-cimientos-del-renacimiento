import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import '../presentation/styles/App.css'
import App from '../app/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../presentation/styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
