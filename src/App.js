import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/featurs/Header/Header';
import Router from './Router';
import Footer from './components/featurs/Footer/Footer';
import UserContext from './contexts/UserContext';
import { useState } from 'react';


function App() {
  const [user,setUser] = useState("")
  return (
    <BrowserRouter>
    <UserContext.Provider value={{user,setUser}}>
      <Header />
      <Router />
      <Footer />
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
