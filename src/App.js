import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
