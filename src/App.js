import './App.css';
import Navbar from './components/Navbar';
import InicioContainer from './components/InicioContainer';
import QuienesSomosContainer from './components/QuienesSomosContainer';
import DocumentosBasicosContainer from './components/DocumentosBasicosContainer';
import SumateContainer from './components/SumateContainer';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";

function App() {
const firebaseConfig = {
  apiKey: "AIzaSyCvTC-zr3CzJm-_bRiFASc8gsKStSo25Ik",
  authDomain: "elfuturoflorece-e743a.firebaseapp.com",
  projectId: "elfuturoflorece-e743a",
  storageBucket: "elfuturoflorece-e743a.appspot.com",
  messagingSenderId: "463820074672",
  appId: "1:463820074672:web:2bc4620f935aa558c69575"
};

// Initialize Firebase
initializeApp(firebaseConfig);
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/Inicio' element={  <InicioContainer /> } />
      <Route path='/QuienesSomos' element={  <QuienesSomosContainer /> } />
      <Route path='/DocumentosBasicos' element={  <DocumentosBasicosContainer /> } />
      <Route path='/Sumate' element={  <SumateContainer /> } />
      <Route path='*' element={  <Error404 /> } />
     </Routes>
     <Footer />
    </BrowserRouter>
   
  );
}

export default App;
