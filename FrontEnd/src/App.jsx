import {Routes,Route, Navigate} from "react-router-dom"
import "./App.css";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import MidRisk from "./pages/MidRisk";
import LowRisk from "./pages/LowRisk";
import HighRisk from "./pages/HighRisk";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import { useState } from "react";
import {Emergency as EF} from './pages/EF'
import Advice from "./pages/Advice";
import ScrollToTop from './components/scrollToTop';
function App() {
   
  const [isAuth, setisAuth] = useState(false)
  const updateAuth = (newAuth) =>{
    setisAuth(newAuth);
    
  }
  let x = localStorage.getItem("token");
  function validateAuth(x){
    
    if(!x || x==null || x==undefined){
     
      return false
    }else{
     
      return true;
    }
  }
  
  
 
 

  const [Savings, setSavings] = useState(localStorage.getItem("salary")||0);

  const updateSavings = (newMessage) => {
    setSavings(newMessage);
    localStorage.savings =newMessage;
  };

  return (
  <>
  <Navbar updateAuth={updateAuth} />
  <ScrollToTop/>
  <Routes>
    <Route path="/" element={(isAuth ||validateAuth(x)) ? <Home savings={Savings} updateSavings={updateSavings} />: <Navigate to='/login' />} />
    <Route path="login" element={(isAuth ||validateAuth(x)) ?<Navigate to='/' /> : <Login updateAuth={updateAuth}/>  } />
    <Route path="signin" element={(isAuth ||validateAuth(x))?<Navigate to='/' />: <Signin  updateAuth={updateAuth}/> } />
    <Route path="/mid" element={(isAuth ||validateAuth(x))? <MidRisk savings={Savings} />: <Navigate to='/login' />} />
    <Route path="/ef" element={(isAuth ||validateAuth(x))? <EF  savings={Savings} />: <Navigate to='/login' />} />
    <Route path="/advice" element={(isAuth ||validateAuth(x))? <Advice  savings={Savings} />: <Navigate to='/login' />} />
    <Route path="/low" element={(isAuth ||validateAuth(x))? <LowRisk savings={Savings}/>: <Navigate to='/login' />} />
    <Route path="/high" element={(isAuth ||validateAuth(x))? <HighRisk savings={Savings}/>: <Navigate to='/login' />} />
  </Routes>
  <Footer />
    </>
  );
}

export default App;
