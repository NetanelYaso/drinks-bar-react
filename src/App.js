import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/featurs/Header/Header';
import Router from './Router';
import Footer from './components/featurs/Footer/Footer';

function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
        <Header/>
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
