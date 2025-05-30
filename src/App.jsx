import './App.css'

import { LanguageProvider } from './contexts/LanguageContext.jsx';


import Home from './pages/Home'



function App() {

  return (
    <>
      <LanguageProvider>
      <Home />
      </LanguageProvider>
    </>
  )
}

export default App
